const path = require('path');

module.exports = {
    entry: {
        index: "./src/index.jsx"
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=true&localIdentName=[name]_[local]__[hash:base64:5]',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        modules: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:10]'
                    },
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {//antd样式处理
                test: /\.css$/,
                exclude: /src/,
                use: [
                    {loader: "style-loader",},
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    }
                ]
            },
            {//ES6、JSX处理
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:
                    {
                        presets: ["@babel/preset-env", "@babel/preset-react"], //preset-react为了jsx能正常支持html标签
                        plugins: [

                            [
                                "@babel/plugin-proposal-decorators",
                                {
                                    "legacy": true
                                }
                            ],
                            [
                                "@babel/plugin-proposal-class-properties", //为了jsx中类能正常解析
                                {
                                    "loose": true
                                }
                            ],
                            [
                                "import", //import插件是为了antd按需加载
                                //{libraryName: "antd", style: 'css'},
                                {libraryName: "antd-mobile", style: 'css'}
                            ]
                        ]
                    },
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    }
};
