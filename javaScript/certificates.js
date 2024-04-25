function embedPDF(pdfSrc) {
    const pdfIframe = document.getElementById('pdf-iframe');
    pdfIframe.src = pdfSrc;
    document.getElementById('pdf-container').style.display = 'block';
}