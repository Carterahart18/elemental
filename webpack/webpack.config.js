const path = require('path');

const BASE_PATH = path.resolve(__dirname, '..');

const config = {
  devtool: 'inline-source-map',
  entry: `${BASE_PATH}/src/index.tsx`,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'images/[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: `${BASE_PATH}/dist`
  },
  resolve: {
    alias: {
      src: `${BASE_PATH}/src`
    },
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    modules: ['node_modules']
  }
};

module.exports = config;
