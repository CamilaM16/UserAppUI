const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  
  
module.exports = {  
  mode: 'development',  
  entry: {  
    app: './src/index.ts'  
  },  
  devtool: 'source-map',
  module: {  
    rules: [  
      {  
        test: /\.(js|ts)$/,  
        exclude: /node_modules/,  
        loader: 'babel-loader'  
      },  
      {  
        test: /\.html$/, 
        use: 'html-loader' 
      }  
    ]  
  },  
  plugins: [  
    new HtmlWebpackPlugin({  
      template: './index.html'  
    }),  
  ],  
  resolve: {  
    extensions: ['.js', '.ts']  
  }  
};