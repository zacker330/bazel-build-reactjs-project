const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // As the index.jsx is transpiled already it is a .js file now
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /(node_modules)/,
      //   use: {
      //     loader: 'swc-loader',
      //   },
      // },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
    ],
  },
  // No need of SWC as it has been ran outside of Webpack during a Bazel build
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: path.join(__dirname, 'public/index.html'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js']
  },
};
