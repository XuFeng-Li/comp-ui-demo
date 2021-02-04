import path from 'path';
// import commonjs from 'rollup-plugin-commonjs';
// import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import json from 'rollup-plugin-json';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const cwd = process.cwd();
const pkgPath = path.resolve(cwd,'./package.json');
const pkg = require(pkgPath);


export default {
    // 要打包的文件源路径
    input: path.resolve(__dirname, './src', 'index.js'),
    // 文件输出配置
    output: [
        {
            // 打包后产生的文件位置
            file: pkg.main,
            // 文件的输出格式（CommonJS规范，时Node.js的官方模块化规范）
            format:'cjs',
            sourcemap:true,
        },
        {
            file: pkg.module,
            format:'es',
            sourcemap:true,
        },
    ],
    // 打包时忽略的文件
    external:[
        ...Object.keys(pkg.peerDependencies || {}),
        ...Object.keys(pkg.dependencies || {}),
    ],
    // // 全局变量，指定打包时使用的全局变量，类似别名
    // global:{
    //
    // },
    // 插件
    plugins: [
        // 不打UMD的包不需要这两个
        // resolve(),
        // 将CommonJS模块转换为ES6，以便rollup打包
        // commonjs({ include:'node_modules/**', exclude:[], }),
        json(),
        url(),
        svgr(),
        postcss({
            modules:true,
            exec: true,
            plugins: [
                // Autoprefixer是一个后处理程序，你可以同Sass，Stylus或LESS等预处理器共通使用。它适用于普通的CSS，而你无需关心要为哪些浏览器加前缀，只需全新关注于实现，并使用W3C最新的规范
                autoprefixer,
                // cssnano 就是这样的一个缩减器，它使基于 Node.js 开发的。cssnano 是一个 PostCSS 插件，可以添加到你的构建流程中，用于确保最终生成的 用于生产环境的 CSS 样式表文件尽可能的小
                cssnano,
            ],
            extract: "dist/css/index.css",
            use: [
                ['less', { javascriptEnabled: true}]
            ]
        }),
        babel({
            // 启用运行时 polyfill 插件 时 需要 使用这个配置一定要设置，否则插件将无法使用
            // runtimeHelpers:true,
            // 只翻译源代码
            exclude:'node_modules/**',
        })
    ]
}
