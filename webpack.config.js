module.exports = process.env.NODE_ENV === 'development'
  ? require('./webpack.dev.conf')
  : require('./webpack.prod.conf');
