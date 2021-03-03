const path = require('path');
const webpack = require('./webpack.config');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/button/src/stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      }
    }
  ],
  webpackFinal: async (config,{configType}) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader','css-loader','sass-loader'],
      include: path.resolve(__dirname,'../'),
    });
    return config;
    // config.module.rules.push(webpack.module.rules || {});
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
            ...config.module.rules,
          {
            test: /\.tsx?$/,
            include: path.resolve(__dirname,"../packages"),
            exclude: /node_modules/,
            use: [
                require.resolve("ts-loader"),
              {
                loader: require.resolve("react-docgen-typescript-loader"),
                options: {
                  tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
                }
              }
            ]
          }
        ]
      }
    };
  },
  babel: async (options) => ({
    ...options,
  }),
  // typescript: {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: 'react-docgen-typescript',
  //   reactDocgenTypescriptOptions: {
  //     compilerOptions: {
  //       allowSyntheticDefaultImports:false,
  //       esModuleInterop:false,
  //     },
  //     // shouldExtractLiteralValuesFromEnum: true,
  //     // propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
  //   },
  // },
};
