// var webpack = require('webpack');
// var path = require('path');

// module.exports =  {
//   debug: true,
//   // devtool: 'cheap-module-eval-source-map', // TODO: cheap-module-eval-sourse-map gives a warning in Chrome 50.0.2661
//   devtool: 'eval-source-map',
//   noInfo: false,
//   entry: [
//     'eventsource-polyfill', // necessary for hot reloading with IE
//     'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
//     './testCode/index'
//   ],
//   target: 'web',
//   // context: path.resolve(__dirname, '..'),
//   output: {
//     path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   devServer: {
//     contentBase: './testCode'
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin()
//   ],
//   module: {
//     loaders: [
//       {test: /\.js$/, include: path.join(__dirname, 'testCode'), loaders: ['babel']},
//       {test: /(\.css)$/, loaders: ['style', 'css']},
//       {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
//       {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
//       {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
//       {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
//     ]
//   }
// };