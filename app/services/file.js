const fileTypes = {
    text: [
        'text',
        'md',
        'css',
        'js',
        // 'html',
    ],
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