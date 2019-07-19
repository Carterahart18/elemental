const path = require('path');

const BASE_PATH = path.resolve(__dirname, '..');

const config = {
  mode: 'development',
  entry: path.resolve(BASE_PATH, './src/index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(BASE_PATH, './dist')
  }
};

module.exports = config;
