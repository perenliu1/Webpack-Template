# Webpack 项目模板

这是一个使用Webpack构建的前端项目模板。

## 项目结构

```
webpack_template/
├── config/
│   ├── webpack.dev.js         # 开发环境配置
│   └── webpack.prod.js        # 生产环境配置
├── public/
│   └── index.html             # HTML 模板
├── src/
│   ├── css/                   # 样式文件
│   ├── images/                # 图片资源
│   ├── js/                    # JavaScript 文件
│   └── main.js                # 入口文件
├── package.json               # 项目配置文件
└── README.md                  # 项目说明文件
```

## 安装依赖

在开始使用此模板之前，请确保已安装 [Node.js](https://nodejs.org/) 和 [npm](https://www.npmjs.com/)。然后在项目根目录下运行以下命令安装项目依赖：

```bash
npm install
```

## 可用脚本

### `npm start`

运行开发服务器。等同于运行 `npm run dev`。

### `npm run dev`

使用开发环境配置启动Webpack开发服务器。

### `npm run build`

使用生产环境配置打包项目。
