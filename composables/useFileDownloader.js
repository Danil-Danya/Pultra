export function useFileDownloader() {
    const isDownloading = ref(false);
    const progress = ref(0);

    async function downloadFile(url, filename) {
        try {
            isDownloading.value = true;
            progress.value = 0;

            const response = await fetch(url);

            const contentLength = response.headers.get('content-length');
            const total = contentLength ? parseInt(contentLength, 10) : 0;

            if (!response.body) {
                throw new Error("ReadableStream not supported");
            }

            const reader = response.body.getReader();
            let received = 0;
            const chunks = [];

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                if (value) {
                    chunks.push(value);
                    received += value.length;
                    if (total) {
                        progress.value = Math.round((received / total) * 100);
                    }
                }
            }

            const blob = new Blob(chunks);
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = filename || url.split('/').pop() || 'file.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(downloadUrl);
        } finally {
            isDownloading.value = false;
        }
    }

    return {
        isDownloading,
        progress,
        downloadFile
    };
}
