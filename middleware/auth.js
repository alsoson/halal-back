import passport from 'passport'
import jsonwebtoken from 'jsonwebtoken'

export const login = (req, res, next) => {
  // console.log('0000')
  passport.authenticate('login', { session: false }, (err, user, info) => {
    console.log(err, user, info)
    // console.log('111')
    if (err || !user) {
      if (info.message === 'Missing credentials') info.message = '驗證錯誤'
      return res.status(401).send({ success: false, message: info.message })
    }
    req.user = user
    next()
  })(req, res, next)
}

export const jwt = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, data, info) => {
    if (err || !data) {
      if (info instanceof jsonwebtoken.JsonWebTokenError) {
        console.log('JWT-AUTH')
        return res.status(401).send({ success: false, message: '驗證錯誤' })
      } else {
        return res.status(401).send({ success: false, message: '401' })
        // info.message
      }
    }
    req.user = data.user
    req.token = data.token
    next()
  })(req, res, next)
}
