import slugify from "slugify";

const generateSlug = (text) => {
    return slugify(text, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g,
        locale: 'ru'
    })
}

export default generateSlug;
