let webpack = require('webpack'),
    path = require('path'),
    BUILD_DIR = path.resolve(__dirname, 'js'),
    APP_DIR = path.resolve(__dirname, 'src'),
    config = {
        entry: {
            app: APP_DIR + '/index.jsx',
            vendor: ["react", "react-dom", 'react-bootstrap-autosuggest', 'html-react-parser', 'react-cookies'],
        },
        output: {
            path: BUILD_DIR,
            filename: '[name].js'
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin("vendor")
        ],
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'react-hot-loader!babel-loader'
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['babili']
                    }
                }
            ]
        },
        watch: false
    };

module.exports = config;