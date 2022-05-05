import React from 'react';

// services
import addScriptTag from '../services/element/addScriptTag';
import addLinkTag from '../services/element/addLinkTag';

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];

function Editor({ id, onChange, value, enable, source }) {
    const [editor, setEditor] = React.useState(null);

    const editorRef = React.useRef(null);

    // defualt values
    enable = enable || true;
    value = value || '';
    source = source || 'user';

    const linkId = `quill-editor-${id}-css`;
    const scriptId = `quill-editor-${id}-script`;

    // initialize the editor
    // only update when ref changes
    const initEditor = React.useCallback(() => {
        if (editorRef.current === null) { return; }

        const Quill = window.Quill;

        if (Quill) {
            const quill = new Quill(editorRef.current, {
                modules: {
                    toolbar: toolbarOptions
                },
                theme: 'snow'
            });

            quill.setContents(value, source)
            quill.enable(enable);
            setEditor(quill);

        }
    }, [editorRef.current]);

    React.useEffect(() => {
        initEditor();
    }, [initEditor]);


    React.useEffect(() => {
        if (editor) {
            editor.on('text-change', (delta, oldDelta, source) => {
                if (source === 'user') {
                    const delta = editor.getContents();
                    onChange(delta);

                }
            })
        }
    }, [editor])


    return (
        <React.Fragment>
            {addLinkTag('https://cdn.quilljs.com/1.3.6/quill.snow.css', linkId)}

            <div ref={editorRef} />

            {addScriptTag('https://cdn.quilljs.com/1.3.6/quill.js', scriptId)}
            <script>
                window.Quill = Quill;
            </script>
        </React.Fragment>
    )
}

export default Editor