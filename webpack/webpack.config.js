const path = require('path');

const BASE_PATH = path.resolve(__dirname, '..');

const config = {
  devtool: 'inline-source-map',
  entry: path.resolve(BASE_PATH, './src/index.tsx'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(BASE_PATH, './dist')
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts']
  }
};

module.exports = config;
