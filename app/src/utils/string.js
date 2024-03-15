function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function extractText(html) {
    return html.replace(/<[^>]*>/g, '');
}

export { capitalizeFirstLetter, extractText };
