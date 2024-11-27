const path = require('path');   // 专门处理路径的模块
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口
    entry: './src/main.js',
    // 输出
    output: {
        // 输出路径（绝对路径）
        path: undefined,
        // 文件名
        filename: 'bundle.js',
    },
    // 加载器
    module: {
        rules: [
            // css
            {
                test: /\.css$/i,    // 正则匹配，检测 css 文件
                use: [
                    'style-loader', // 将 js 中的 css 通过 style 标签插入到 html 中生效
                    'css-loader'    // 将 css 资源编译成 commonjs 模块到 js 中
                ] // 加载顺序：从后往前
            },
            // less
            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            // 图片资源
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024   // 小于 4kb 的图片会被转成 base64，减少请求
                    }
                },
                generator: {
                    filename: 'static/images/[name].[hash:8][ext]'
                }
            },
            // 字体图标
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource', // 以资源的方式引入，不会转 base64
                generator: {
                    filename: 'static/fonts/[name].[hash:8][ext]'
                }
            },
            // 媒体资源
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'static/media/[name].[hash:8][ext]'
                }
            },
            // js
            {
                test: /\.js$/,
                exclude: /node_modules/,    // 排除 node_modules 目录
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'], // 预设
                },
            },
        ]
    },
    // 插件
    plugins: [
        new ESLintPlugin({
            // 指定检查的目录
            context: path.resolve(__dirname, '../src'),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
        }),
    ],
    devServer: {
        host: 'localhost', // 服务器主机名
        port: 3000, // 服务器端口
        open: true, // 自动打开浏览器
    },
    // 模式（development | production）
    mode: 'development'
}