module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader' }
    ]
  }
};