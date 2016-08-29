const webpack = require('webpack');
const path = require('path');

const plugins = [];

if (process.env.NODE_ENV === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
    entry: './app.js',
    output: {
        path: path.join(__dirname, '/_build'),
        filename: 'henry.js',
    },
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
