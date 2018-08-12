const path = require('path');

module.exports = {
  entry: [path.resolve(process.cwd(), 'vendor/index.js')],

  output: {
    filename: 'vendor.js',
    path: path.resolve(process.cwd(), 'lib'),
    libraryTarget: 'commonjs2',
  },

  mode: 'production',

  module: {
    rules: [
      {
        exclude: /node_modules\/(?!()\/).*/,
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [['env', {
            'modules': false,
          }]],
        },
      },
    ],
  },
};
