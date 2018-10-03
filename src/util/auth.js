import jwt from 'jsonwebtoken';

function verifyUserToken(request) {
  if (!request.headers || !request.headers.authorization) {
    throw new Error('Authorization header missing')
  }
  return jwt.verify(req['access_token'], 'test');
}

export {
  verifyUserToken
}