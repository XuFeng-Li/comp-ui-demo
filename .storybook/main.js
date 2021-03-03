const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    // "../packages/button/src/stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/preset-create-react-app",
    // {
    //   name: "@storybook/addon-docs",
    //   options: {
    //     configureJSX: true,
    //   }
    // }
  ],
  // webpackFinal: async (config,{configType}) => {
  //   // 添加 sass 支持
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: ['style-loader','css-loader','sass-loader'],
  //     include: path.resolve(__dirname,'../'),
  //   });
  //   return config;
  // },
};
