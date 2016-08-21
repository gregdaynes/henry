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
    return function file() {
        // console.log(file);

        determinType(file.data.name)
            .then(response => {
                console.log(response);
            });

        return Promise.resolve().then(() => file);
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
