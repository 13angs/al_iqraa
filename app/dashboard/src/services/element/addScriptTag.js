export default function addScriptTag(url, id) {
    const script = document.createElement('script');
    script.src = url;
    script.id = id;
    script.async = true;
    document.body.appendChild(script);
}