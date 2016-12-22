const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: '#source-map',
    entry: {
        main: ['./src/main.js'],
        vendor: ['react', 'react-dom', 'axios', 'lodash', 'react-router']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, 'src/assets'),
            components: path.resolve(__dirname, 'src/components'),
            containers: path.resolve(__dirname, 'src/containers'),
            css: path.resolve(__dirname, 'src/css')
        },
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'raw-loader',
            },
            {
                test: /\.less$/,
                //loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[local]__[hash:base64:5]!less-loader!postcss-loader'),
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg|ttf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'assets/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    postcss: [
        require('autoprefixer')({ browsers: ['last 2 versions'] })
    ],
    plugins: [
        new ExtractTextPlugin('css/style.[contenthash].css', {
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        })
    ]
};
