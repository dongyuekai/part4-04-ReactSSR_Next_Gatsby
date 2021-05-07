module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage'
                }
              ], // 转换ES6语法
              '@babel/preset-react' // 转换JSX语法
            ]
          }
        }
      }
    ]
  }
}