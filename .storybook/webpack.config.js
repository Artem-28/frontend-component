const path = require('path')
const rootPath = path.resolve(__dirname, '../src')

module.exports = ({ config }) => {
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
            @import "@/assets/styles/02-utilities/_index.scss";
            @import "@/assets/styles/04-layout/icon.scss";
          `,
        }
      }
    ],
  })

  config.resolve.alias['@'] = rootPath
  config.resolve.alias['~'] = rootPath

  return config
}
