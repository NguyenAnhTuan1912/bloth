import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import AuthUtility from "utilities/authentication";
import AsyncStorageUltility from "utilities/async_store";

// File này là để define các hàm gọi API.
// Blog

const userBaseURL = "/user";

/*
  Các Function này sẽ nhận vào một axios instance để setup axios instance đã config
  ở file `axiosInstance.js`. Khi ở file này có thay đổi thì không cần phải sửa quá nhiều nơi.
  Trả về function dùng để gọi tới server để lấy dữ liệu của một user.
*/

/**
 * Setup api function để sign in
 * @returns
 */
export function configureSignInAsyncFunc(axiosInstance) {
  /**
   * Thực hiện việc đăng nhập
   * @param {string} user Địa chỉ email hoặc là username của người dùng nhập vào.
   * @param {string} password Mẩu khẩu người dùng nhập vào.
   * @returns {Promise<AxiosResponse>}
   * 
   * @example
   * // Usage
   * const signInRes = await signInAsync(options);
   */
  return async function signInAsync(user, password) {
    /**
     * @type {AxiosRequestConfig}
     */
    let data = {
      "user": user,
      "password": password
    }
    let url = userBaseURL + "/sign-in";
    return await axiosInstance.post(url, {data})
  }
}

/**
 * Setup api function để sign up
 * @param {AxiosInstance} axiosInstance Một custom axios function đã config từ trước.
 * @returns
 */
export function configureSignUpAsyncFunc(axiosInstance) {
  /**
   * Thực hiện việc đăng ký.
   * @param {object} newUserData Các thông tin ban đầu của user mới.
   * @returns {Promise<AxiosResponse>}
   * 
   * @example
   * // Usage
   * const signUpRes = await signUpAsync(options);
   */
  return async function signUpAsync(newUserData) {
    /**
     * @type {AxiosRequestConfig}
     */
    let data = {
      "email": newUserData.email,
      "firstName": newUserData.firstName,
      "lastName": newUserData.lastName,
      "bio": newUserData.bio,
      "dateOfBirth": newUserData.dateOfBirth,
      "username": newUserData.username,
      "password": newUserData.password,
      "career": newUserData.career
    }
    let url = userBaseURL + "/sign-up";
    return await axiosInstance.post(url, {data})
  }
}

/**
 * Setup api function để sign up
 * @param {AxiosInstance} axiosInstance Một custom axios function đã config từ trước.
 * @returns
 */
export function configureUpdatePasswordAsyncFunc(axiosInstance) {
  /**
   * __Authorization Require__
   * 
   * Thực hiện việc thay đổi mật khẩu.
   * @param {AxiosRequestConfig} requestOptions Các thuộc tính cấu hình cho request.
   * @returns {Promise<AxiosResponse>}
   * 
   * @example
   * // Usage
   * const updatePasswordRes = await updatePasswordAsync(options);
   */
  return async function updatePasswordAsync(email, password) {
    let token = await AsyncStorageUltility.getValue(AsyncStorageUltility.ACCESS_TOKEN_KEY);
    if(!token) return Promise.reject("Token is not found.");
    /**
     * @type {AxiosRequestConfig}
     */
    let options = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    };

    let data = {
      "email": email,
      "password": password
    };
    let url = userBaseURL + "/update-password";
    return await axiosInstance.post(url, {data}, options)
  }
}

/**
 * Setup api function để giúp người dùng tìm lại mật khẩu.
 * @param {AxiosInstance} axiosInstance Một custom axios function đã config từ trước.
 * @returns
 */
export function configureForgotPasswordAsyncFunc(axiosInstance) {
  /**
   * Thực hiện việc yêu cầu lấy lại mật khẩu.
   * @param {string} email Địa chỉ email của tài khoản mà người dùng cần lấy lại mật khẩu.
   * @returns {Promise<AxiosResponse>}
   * 
   * @example
   * // Usage
   * const forgotPasswordRes = await forgotPasswordAsync(options);
   */
  return async function forgotPasswordAsync(email) {
    /**
     * @type {AxiosRequestConfig}
     */
    let data = {
      "email": email
    }
    let url = userBaseURL + "/forgot-password";
    return await axiosInstance.post(url, {data})
  }
}

/**
 * Setup api function để giúp người dùng yêu cầu được uỷ quyền
 * @param {AxiosInstance} axiosInstance Một custom axios function đã config từ trước.
 * @returns
 */
export function configureAuthorizeAsyncFunc(axiosInstance) {
  /**
   * Thực hiện việc uỷ quyền. Thông thường muốn uỷ quyền thì phải có refreshToken hoặc là
   * phải có verification code (uỷ quyền thông qua verification code thì thường có thời gian ngắn hơn).
   * @param {"REFRESH_TOKEN" | "VERIFICATION_CODE"} type Các kiểu uỷ quyền.
   * @param {string} token Token có thể là JWTToken (Refresh token) hoặc là Verification code.
   * @returns {Promise<AxiosResponse>}
   * 
   * @example
   * // Usage
   * const authorizeRes = await authorizeAsync(options);
   */
  return async function authorizeAsync(type, token) {
    /**
     * @type {AxiosRequestConfig}
     */
    let options = {
      params: {
        "type": "",
        "token": token
      }
    }
    console.log("TYPE: ", type);
    console.log("OPTIONS: ", options);
    switch(type) {
      case AuthUtility.AUTHORIZE_TYPES.VERIFICATION_CODE: {
        options.params.type = type;
        break;
      };

      case AuthUtility.AUTHORIZE_TYPES.REFRESH_TOKEN: {
        options.params.type = type;
        break;
      };

      default: {
        return Promise.reject(`This authorize type is not available. Type ${type}.`);
      };
    }
    console.log("OPTIONS: ", options);
    let url = userBaseURL + "/authorize";
    return await axiosInstance.get(url, options)
  }
}