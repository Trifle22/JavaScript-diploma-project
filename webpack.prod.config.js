const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'production.js',
    path: path.resolve(__dirname, './dist'),
    path: path.resolve(process.cwd(), 'dist'),
  },
  mode : 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
          },
        },
        exclude: /node_modules/,
      }
    ]
  },
};