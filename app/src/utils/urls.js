export const getAvatarUrl = (name) => {
    const filename = `/assets/img/sample/${name}`;
    return new URL(filename, import.meta.url).href;
};
export const getThumbnailUrl = (name) => {
    const filename = `/assets/img/sample/${name}`;
    return new URL(filename, import.meta.url).href;
};
