const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
    devtool: '#cheap-eval-source-map',
    entry: [
        'webpack/hot/only-dev-server',
        'webpack-dev-server/client?http://localhost:9000',
        './src/main.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
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
                loaders: ['react-hot', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    //'css-loader?modules&importLoaders=1&localIdentName=[local]__[hash:base64:8]',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    //'css-loader?modules&importLoaders=2&localIdentName=[local]__[hash:base64:8]',
                    'less-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|ttf|eto)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'assets/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new WebpackBrowserPlugin({
            port: 9000,
            url: 'http://localhost'
        })
    ],
    postcss: [
        require('autoprefixer')({ browsers: ['last 2 versions'] })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 9000
    }
};
