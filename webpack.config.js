const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: [
      './src/Helpers/helper.js',
      './src/main.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}