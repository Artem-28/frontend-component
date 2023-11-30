const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-actions"
  ],
  "framework": "@storybook/vue",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {

    // Use Sass loader for vuetify components
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            // sassOptions() { }
            additionalData: `
              @import "@/styles/utilities/_index.scss";
            `,
          },
        },
      ],
      // include: path.resolve(__dirname, '@/styles/utilities/_index.scss'),
    });

    // Return the altered config
    return config;
  },
}
