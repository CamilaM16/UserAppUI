const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  
  
module.exports = {  
  mode: 'development',  
  entry: {  
    app: './src/index.ts'  
  },  
  devtool: 'source-map', // Generate separate source map files  
  module: {  
    rules: [  
      {  
        test: /\.(js|ts)$/,  
        exclude: /node_modules/,  
        loader: 'babel-loader'  
      },  
      {  
        test: /\.html$/, // All Knockout.js component HTML templates  
        use: 'html-loader' // Adds the component templates to the bundle  
      }  
    ]  
  },  
  plugins: [  
    new HtmlWebpackPlugin({  
      template: './web-template/index.html'  
    }),  
  ],  
  resolve: {  
    extensions: ['.js', '.ts']  
  }  
};