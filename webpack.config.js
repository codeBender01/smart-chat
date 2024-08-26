/* eslint-disable prettier/prettier */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const WebpackBar = require('webpackbar');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const tsNameOf = require('ts-nameof');
const TerserPlugin = require('terser-webpack-plugin');
const {DefinePlugin} = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const package = require('./package.json');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = env => {
    const isProduction = env.NODE_ENV === 'production';
    const dotenvFilename = isProduction ? '.env.production' : '.env.development';
    return {
        devtool: 'eval-source-map',
        entry: {
            app: path.join(__dirname, 'src', 'index.tsx'),
            // silentRefresh: path.join(__dirname, 'src', 'silent-refresh.ts'),
        },
        devServer: {
            client: {
                overlay: {
                    errors: true,
                    warnings: false,
                },
            },
            hot: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            historyApiFallback: {
                index: '/',
            },
            host: '0.0.0.0',
            server: {
                type: 'http',
            },
            static: './dist',
        },
        target: 'web',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
            // fallback: { util: require.resolve('util/') },
            plugins: [new TsconfigPathsPlugin()],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                transpileOnly: true,
                                getCustomTransformers: () => ({before: [tsNameOf]}),
                            },
                        },
                    ],
                    exclude: '/node_modules/',
                },

                {
                    test: /\.jsx?$/,
                    use: ['babel-loader'],
                    exclude: '/node_modules/',
                    include: '/src',
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack', 'file-loader'],
                },
                // {
                //     test: /\.css$/,
                //     use: ['style-loader', 'css-loader'],
                //     exclude: '/node_modules/',
                // },
                {
                    test: /\.css$/i,
                    include: path.resolve(__dirname, 'src'),
                    use: ['style-loader', 'css-loader', 'postcss-loader'],
                },
                {
                    test: /\.(jpe?g|svg|png|gif|ico|eot|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.m?js/,
                    resolve: {
                        fullySpecified: false,
                    },
                },
            ],
        },
        output: {
            filename: '[name].[fullhash].js',
            chunkFilename: '[name].chunk.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    json: {
                        type: 'json',
                    },
                },
            },
            minimizer: [new TerserPlugin({})],
        },
        plugins: [
            new Dotenv({
                path: dotenvFilename,
            }),
            new DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
            }),
            new HtmlWebpackPlugin({
                inject: 'body',
                template: path.join(__dirname, 'src', 'index.html'),
                filename: 'index.html',
                chunks: ['app'],
            }),
            new ESLintPlugin({
                extensions: ['ts', 'tsx'],
            }),
            new DefinePlugin({
                __APP_VERSION: JSON.stringify(package.version),
                __APP_NAME: JSON.stringify(package.name),
            }),
            new WebpackBar(),
            new ForkTsCheckerWebpackPlugin(),
            // new CopyPlugin({
            //     patterns: [
            //         {from: 'public/assets/*.ttf', to: 'assets/[name].ttf'},
            //         {from: 'public/images/*.svg', to: 'images/[name].svg'},
            //         {from: 'public/images/*.png', to: 'images/[name].png'},
            //     ],
            // }),
        ],
        experiments: {
            topLevelAwait: true,
        },
    };
};
