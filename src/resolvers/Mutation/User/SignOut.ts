import jwt = require('jsonwebtoken')

const SignOut = {
  signOut: (_: any, args: any, ctx: any) => {
    ctx.res.clearCookie('token')
    return { message: 'SIGNED_OUT' }
  }
}

export { SignOut }
