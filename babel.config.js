// babel.config.js
// babel 不支持 es 语法

module.exports = {
    babelrc: true,
    exclude: [

    ],
    presets: [
        [
            "@babel/preset-env",
            {
                // 避免在rollup处理之前，被babel转成CommonJS格式
                "modules": false,
            }
        ],
        "@babel/preset-react"
    ],
    plugins: [
        // "@babel/plugin-external-helpers",
        "@babel/core",
        "@babel/plugin-transform-arrow-functions",
        "@babel/plugin-proposal-class-properties",
        [
            "import",
            {
                "libraryName": "antd",
                "libraryDirectory": "css",
                // `style: true` 会加载 less 文件, css加载.css文件
                "style": true,
            }
        ]
    ],
    // ignore: [
    //     'node_modules/**',
    // ]
};
