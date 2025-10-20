import { parse, HTMLElement } from 'node-html-parser';

export default function parseHtmlToData(html) {
    if (!html) return [];

    const root = parse(html);
    const result = [];
    let current = createBlock();

    function createBlock() {
        return { 
            title: '', 
            subtitle: '', 
            subtitleMini: '', 
            text: '', 
            list: [], 
            image: null 
        };
    }

    // Добавляет класс seo__link ко всем ссылкам в узле
    function enhanceLinks(node) {
        const links = node.querySelectorAll('a');
        links.forEach(a => {
            const existing = a.getAttribute('class');
            a.setAttribute('class', existing ? `${existing} seo__link` : 'seo__link');
        });
    }

    // Обрабатывает <p> и сохраняет HTML
    // function enhanceParagraph(pNode) {
    //     enhanceLinks(pNode);
    //     return pNode.innerHTML.trim();
    // }

    function enhanceParagraph(pNode) {
         enhanceLinks(pNode);

        // Создаём клон вручную через повторный парсинг
        const cloned = parse(pNode.toString());
        cloned.querySelectorAll('img').forEach(img => img.remove());

        const htmlWithoutImages = cloned.innerHTML.trim();
        return htmlWithoutImages;
    }


    // ⚡ Новая функция — для <li> сохраняет HTML с выделениями и ссылками
    function extractLiContent(liNode) {
        enhanceLinks(liNode);
        return liNode.innerHTML.trim();
    }

    function parseTable(tableNode) {
        const rows = tableNode.querySelectorAll('tr');
        if (!rows.length) return { headings: [], rows: [] };

        const headings = [];
        const dataRows = [];

        // Проходим по всем <tr>
        rows.forEach((row, rowIndex) => {
            const cells = row.querySelectorAll('td, th');
            const rowData = [];

            cells.forEach((cell) => {
                const text = cell.text.trim();
                const colspan = parseInt(cell.getAttribute('colspan') || '1', 10);
                const rowspan = parseInt(cell.getAttribute('rowspan') || '1', 10);

                if (rowIndex === 0) {
                    // Первая строка — основные заголовки
                    const heading = { text, colspan, rowspan };
                    if (colspan > 1) heading.subheadings = []; // сюда попадут подзаголовки
                    headings.push(heading);
                } else if (rowIndex === 1) {
                    // Вторая строка — подзаголовки для colspan
                    let headingIndex = 0;
                    headings.forEach((h) => {
                        if (h.colspan > 1) {
                            h.subheadings.push(text);
                            headingIndex += 1;
                        }
                    });
                } else {
                    // Остальные строки — данные
                    rowData.push(text);
                }
            });

            if (rowIndex > 1) dataRows.push(rowData);
        });

        return { headings, rows: dataRows };
    }


    function parseLi(liNode) {
        const item = createBlock();

        liNode.childNodes.forEach(child => {
            const tag = child.tagName?.toLowerCase?.();
            if (!tag) {
                const txt = child.text?.trim();
                if (txt) item.text += (item.text ? ' ' : '') + txt;
                return;
            }

            switch (tag) {
                case 'h2': item.title = child.text.trim(); break;
                case 'h3': item.subtitle = child.text.trim(); break;
                case 'h4': item.subtitleMini = child.text.trim(); break;

                case 'p': {
                    const html = enhanceParagraph(child);
                    if (html) item.text += (item.text ? '\n' : '') + html;
                    break;
                }

                case 'ul':
                case 'ol': {
                    const subItems = child.querySelectorAll(':scope > li');
                    subItems.forEach(subLi => item.list.push(parseLi(subLi)));
                    break;
                }

                case 'img': {
                    const src = child.getAttribute('src');
                    const alt = child.getAttribute('alt') || '';
                    if (src) item.image = { src, alt };
                    break;
                }

                default: {
                    // ⚡ Сохраняем HTML внутри других тегов в <li>
                    const html = extractLiContent(child);
                    if (html) item.text += (item.text ? ' ' : '') + html;
                }
            }
        });

        item.text = item.text.trim();
        return item;
    }

    function walk(node) {
        const tag = node.tagName?.toLowerCase?.();

        switch (tag) {
            case 'h2':
            case 'h3':
            case 'h4': {
                if (hasContent(current)) {
                    result.push(current);
                    current = createBlock();
                }

                const text = node.text.trim();
                if (tag === 'h2') current.title = text;
                if (tag === 'h3') current.subtitle = text;
                if (tag === 'h4') current.subtitleMini = text;
                break;
            }

            case 'p': {
                const html = enhanceParagraph(node);
                if (html) current.text += (current.text ? '\n' : '') + html;
                break;
            }

            case 'ul':
            case 'ol': {
                const items = node.querySelectorAll(':scope > li');
                const parsedItems = items.map(parseLi);
                if (parsedItems.length) current.list.push(...parsedItems);
                break;
            }

            case 'img': {
                const src = node.getAttribute('src');
                const alt = node.getAttribute('alt') || '';
                if (src) current.image = { src, alt };
                break;
            }

            case 'table': {
                const tableData = parseTable(node);

                // Проверяем, есть ли заголовки или строки таблицы
                if ((tableData.headings && tableData.headings.length) || 
                    (tableData.rows && tableData.rows.length)) {

                    // Если в current есть что-то кроме текста, сохраняем его отдельно
                    if (hasContent(current) && !current.table) {
                        result.push(current);
                        current = createBlock();
                    }

                    // Создаём блок только для таблицы
                    const tableBlock = createBlock();
                    tableBlock.table = tableData;
                    result.push(tableBlock);
                }
                break;
            }
        }

        if (node.childNodes?.length) {
            node.childNodes.forEach(child => walk(child));
        }
    }

    function hasContent(block) {
        return (
            block.title ||
            block.subtitle ||
            block.subtitleMini ||
            block.text ||
            block.list.length ||
            block.image ||
            block.table
        );
    }

    walk(root);

    if (hasContent(current)) {
        result.push(current);
    }

    return result;
}
