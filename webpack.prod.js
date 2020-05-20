const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(commonConfig, {
    mode: 'production',
    rules: [
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    test: /\.scss$/,
                    use: [
                        { loader: MiniCssExtractPlugin.loader },
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' }
                    ]
                },
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'static/',
                        useRelativePath: true
                    }
                }
            ]
        }
    ],
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
})