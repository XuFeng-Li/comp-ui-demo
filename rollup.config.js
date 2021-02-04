import path from 'path';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    // 要打包的文件源路径
    input: path.resolve(__dirname, './src', 'main.js'),
    // 文件输出配置
    output: {
        // 打包后产生的文件位置
        file: path.resolve(__dirname,'./dist/index.js'),
        // 文件的输出格式（CommonJS规范，时Node.js的官方模块化规范）
        format:'cjs',
    },
    // 打包时忽略的文件
    external:[

    ],
    // 全局变量，指定打包时使用的全局变量，类似别名
    global:{

    },
    // 插件
    plugin: [
        // 不打UMD的包不需要这两个
        // resolve(),
        // 将CommonJS模块转换为ES6，以便rollup打包
        // commonjs({ include:'node_modules/**', exclude:[], }),
        babel({
            // 启用运行时 polyfill 插件 时 需要 使用这个配置一定要设置，否则插件将无法使用
            // runtimeHelpers:true,
            // 只翻译源代码
            exclude:'node_modules/**',
        })
    ]
}
