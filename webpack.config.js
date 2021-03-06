const path = require( 'path' );
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve( process.cwd(), 'build' ),
    filename: 'bundle.js'
  },
  module: {
   loaders: [{
     test: /\.js$/,
     exclude: /node_modules/,
     loader: "babel-loader"
   }]
 }
};
