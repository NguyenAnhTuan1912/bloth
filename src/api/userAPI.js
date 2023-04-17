import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// File này là để define các hàm gọi API.
// Blog

const userBaseURL = "/user";

/**
 * Function này sẽ nhận vào một axios instance để setup axios instance đã config
 * ở file `axiosInstance.js`. Khi ở file này có thay đổi thì không cần phải sửa quá nhiều nơi.
 * Trả về function dùng để gọi tới server để lấy dữ liệu của một blog.
 * @param {AxiosInstance} axiosInstance Một custom axios function đã config từ trước.
 * @returns {(options: AxiosRequestConfig) => Promise<AxiosResponse>}
 */
export function configureSignInAsyncFunc(axiosInstance) {
  /**
   * Nhận vào các thuộc tính request config cho axios instance.
   * @param {AxiosRequestConfig} requestOptions Các thuộc tính cấu hình cho request.
   * @returns {Promise<AxiosResponse>}
   * 
   * @example
   * // Usage
   * const signInRes = await signInAsync({ params: { id: 'bl_01' } });
   */
  return async function signInAsync(requestOptions) {
    let url = userBaseURL + "/sign-in";
    return await axiosInstance.post(url, requestOptions);
  }
}