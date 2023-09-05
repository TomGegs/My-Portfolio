function ButtonDownloadHandler({ label, fileName, filePath, styling }) {
    const downloadFile = () => {
        const filePathway = `${filePath}`;
        const link = document.createElement('a');
        link.href = filePathway;
        link.target = '_blank';

        link.download = `${fileName}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button type="button" onClick={downloadFile} className={styling}>
            {label}
        </button>
    );
}

export default ButtonDownloadHandler;
