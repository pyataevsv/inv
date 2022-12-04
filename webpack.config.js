// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'dist/assets/[name][ext]'
        // publicPath: '/'
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        },
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[hash][ext]'
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[hash][ext][query]'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                generator: {
                    filename: 'assets/[hash][ext][query]'
                }
            },
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: {

                    loader: 'babel-loader'
                },
                generator: {
                    filename: 'assets/[hash][ext][query]'
                }
            },
            {
                test: /\.s(c|a)ss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    "sass-loader"
                ],
                generator: {
                    filename: 'assets/[hash][ext][query]'
                }
            },

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },


}
