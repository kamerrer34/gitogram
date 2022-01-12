const path = require('path');
const custom = require('../node_modules/@vue/cli-service/webpack.config.js');

module.exports = {
  "stories": [
    "../src/**/*.stories.js",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-backgrounds'
  ],
  "framework": "@storybook/vue3",
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  }
}