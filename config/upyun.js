module.exports = {
  operator: process.env.UPYUN_OPERATOR,
  password: process.env.UPYUN_PASSWORD,
  tasks: [{
    prefix    : 'zmw/h5-upload/',
    endpoint  : 'v0',
    bucket    : 'hlj-img',
    directory : 'dist/assets'
  }]
}
