module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    if (req.body.username === 'admin' && req.body.password === '123456') {
      return res.status(200).json({
        code: 0,
        data: '12312321',
        msg: null,
      })
    }
    return res.status(401).json({
      code: -1,
      data: null,
      msg: '用户信息过期！',
    })
  }

  next()
}
