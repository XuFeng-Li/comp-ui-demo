export default {
    // 要打包的文件源路径
    input: 'src/index.js',
    // 文件输出配置
    output: {
        // 打包后产生的文件位置
        file: 'dist/bundle.cjs.js',
        // 文件的输出格式（CommonJS规范，时Node.js的官方模块化规范）
        format:'cjs',
        // 包的全局变量名称
        name:'bundleName'
    }
}
