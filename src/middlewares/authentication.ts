import { Request, Response, NextFunction } from 'express'

import { verify, decode } from 'jsonwebtoken'

export async function authentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const token = request.headers.authorization
  if (!token) {
    return response.status(401).end()
  }
  try {
    verify(token, process.env.JWT_SECRET)
    const { sub: userId } = decode(token)
    request.user_id = String(userId)
    return next()
  } catch (err) {
    console.log(err)
    return response.status(401).end()
  }
}
