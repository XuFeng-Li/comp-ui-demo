import path from 'path';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import json from 'rollup-plugin-json';
import url from 'rollup-plugin-url';
import scss from 'rollup-plugin-scss';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

import pkg from './package.json';

const tsImportPluginFactory = require("ts-import-plugin");

const tsImportPlugin = tsImportPluginFactory({
    libraryDirectory: "es",
    libraryName: "antd",
    style: true,
});

// const cwd = process.cwd();
// const pkgPath = path.resolve(cwd,'./package.json');
// const pkg = require(pkgPath);


export default {
    // 要打包的文件源路径
    input: 'src/index.ts',
    // 文件输出配置
    output: [
        {
            file: pkg.main,
            format:'cjs',
        },
        {
            file: pkg.module,
            format:'es',
        },
        { file: pkg.min, format: "cjs", plugins: [terser()] },
        {
            file: pkg.scss,
            format:'esm',
        }
    ],
    // 打包时忽略的文件
    external:[
        ...Object.keys(pkg.peerDependencies || {}),
        // ...Object.keys(pkg.dependencies || {}),
    ],
    // 插件
    plugins: [
        // 不打UMD的包不需要这两个
        // resolve(),
        // 将CommonJS模块转换为ES6，以便rollup打包
        // commonjs({ include:'node_modules/**', exclude:[], }),
        json(),
        url(),
        svgr(),
        external(),
        scss(),
        // terser(),
        resolve({
            jsnext: true,
        }),
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
            // 只翻译源代码
            exclude:'node_modules/**',
        }),
        typescript({
            clean: true,
            typescript: require("typescript"),
            tsconfig: "tsconfig.json",
            transformers: () => ({
                before: [tsImportPlugin]
            }),
        }),
    ]
}
