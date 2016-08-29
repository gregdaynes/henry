const webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname + '/_build',
        filename: 'henry.js',
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/ },
            { test: /\.html$/, loader: 'raw', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.scss$/, loader: 'style!css!sass', exclude: /node_modules/ },
        ],
    },

    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin(),
    // ],
};
