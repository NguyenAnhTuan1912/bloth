import jwt_decode from 'jwt-decode';
import { isExpired } from 'react-jwt';

/**
 * Hàm này dùng để check xem là JWTToken đã hết hạn hay chưa.
 * @param {string} token Token được gửi từ server.
 */
function isTokenExpired(token) {
  return isExpired(token)
}

/**
 * 
 * @param {string} token Token được gửi từ server.
 */
function decodeToken(token) {
  try {
    return jwt_decode(token)
  } catch (error) {
    return undefined;
  }
}

const JWTUlitity = {
  isTokenExpired,
  decodeToken
}

export default JWTUlitity;