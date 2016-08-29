import 'codemirror/mode/gfm/gfm.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/xml/xml.js';

const fileTypes = {
    markdown: ['md', 'markdown'],
    javascript: ['js', 'json'],
    text: ['text'],
    css: ['css', 'scss', 'less'],
    html: ['html'],
    xml: ['xml'],
    image: [
        'png',
        'svg',
        'jpg',
    ],
};

export default () => {
    return function processFile(file) {
        return determinType(file.data.name)
            .then(type => [type, file]);
    };

    function determinType(filename) {
        const ext = filename.split('.').pop();

        const filetype = Object.keys(fileTypes).reduce((acc, item) => {
            if (fileTypes[item].some(value => value === ext)) return item;
            return acc;
        });

        return Promise.resolve().then(() => filetype || 'text');
    }
};
