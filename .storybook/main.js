const path = require('path');
const webpack = require('./webpack.config');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
    // "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/preset-create-react-app"
  ],
  webpackFinal: async (config,{configType}) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader','css-loader','sass-loader'],
      include: path.resolve(__dirname,'../'),
    });
    // config.module.rules.push(webpack.module.rules || {});
    return config;
  },
  babel: async (options) => ({
    ...options,
  }),
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports:false,
        esModuleInterop:false,
      },
      // shouldExtractLiteralValuesFromEnum: true,
      // propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
