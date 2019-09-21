const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist')
},
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      root: path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
