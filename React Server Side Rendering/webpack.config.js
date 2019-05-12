// Webpack is run on Node
// Will be deployed to Firebase Hosting as a static file
module.exports = {
  // Entry file, first file for Webpack to look at in order to figure out
  // how to bundle up all the files together
  entry: "./src/index.js",
  // Module pack is what Webpack is going to do in the middle of this process
  // Transform ES2015 to browser code that browsers of today can understand
  module: {
    // While loading the file, transform it in some way
    loaders: [
      //Finds all js files & use 'babel-loader'
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },
  // Information about the output
  // Where to save the final product
  output: {
    filename: "bundle.js",
    // __dirname => current directory
    path: __dirname + "/public"
  }
};
