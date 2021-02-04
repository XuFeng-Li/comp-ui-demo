
// babel.config.js
// babel 不支持 es 语法

module.exports = {
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
    ],
    ignore: [
        'node_modules/**',
    ]
};
