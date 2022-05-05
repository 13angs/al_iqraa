export default function addLinkTag(url, id) {
    const link = document.createElement('link');
    link.id = id;
    link.href = url;
    link.rel = 'stylesheet';
    document.body.appendChild(link);
}