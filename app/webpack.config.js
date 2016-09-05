const webpack = require('webpack');
const path = require('path');

const plugins = [];
const entry = './app.js';
const output = {
    path: path.join(__dirname, '/_build'),
    filename: 'henry.js',
};

if (process.env.NODE_ENV === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin());

    output.path = path.join(__dirname, '../dist');
}

module.exports = {
    entry,
    output,
    plugins,

    module: {
        loaders: [
            { test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/ },
            { test: /\.html$/, loader: 'raw', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.scss$/, loader: 'style!css!sass', exclude: /node_modules/ },
        ],
    },
};
