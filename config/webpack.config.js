const path = require('path');

module.exports = {
  // ...other webpack configurations...

  resolve: {
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      crypto: require.resolve('crypto-browserify'),
      util: require.resolve('util/'),
      stream: require.resolve('stream-browserify'),
    },
  },
};
