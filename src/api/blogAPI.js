import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// File này là để define các hàm gọi API.
// Blog

const blogBaseURL = "/blog";

/**
 * Function này sẽ nhận vào một axios instance để setup axios instance đã config
 * ở file `axiosInstance.js`. Khi ở file này có thay đổi thì không cần phải sửa quá nhiều nơi.
 * Trả về function dùng để gọi tới server để lấy dữ liệu của một blog.
 * @param {AxiosInstance} axiosInstance Một custom axios function đã config từ trước.
 * @returns {(options: AxiosRequestConfig) => Promise<AxiosResponse>}
 */
export function configureGetBlogAsyncFunc(axiosInstance) {
  /**
   * Nhận vào các thuộc tính request config cho axios instance.
   * @param {AxiosRequestConfig} requestOptions Các thuộc tính cấu hình cho request.
   * @returns {Promise<AxiosResponse>}
   * 
   * @example
   * // Usage
   * const blogDetail = await getBlogAsync({ params: { id: 'bl_01' } });
   */
  return async function getBlogAsync(requestOptions) {
    let url = blogBaseURL + "/get";
    return await axiosInstance.get(url, requestOptions);
  }
}

/**
 * Function này sẽ nhận vào một axios instance để setup axios instance đã config
 * ở file `axiosInstance.js`. Khi ở file này có thay đổi thì không cần phải sửa quá nhiều nơi.
 * Trả về function dùng để gọi tới server để lấy dữ liệu của nhiều blog.
 * @param {AxiosInstance} axiosInstance Một custom axios function đã config từ trước.
 * @returns {(options: AxiosRequestConfig) => Promise<AxiosResponse>}
 */
export function configureGetBlogsAsyncFunc(axiosInstance) {
  /**
   * Nhận vào các thuộc tính request config cho axios instance.
   * @param {AxiosRequestConfig} requestOptions Các thuộc tính cấu hình cho request.
   * @returns {Promise<AxiosResponse>}
   * 
   * @example
   * // Usage
   * const blogDetail = await getBlogsAsync({ params: { limit: 10 } });
   */
  return async function getBlogsAsync(requestOptions) {
    let url = blogBaseURL + "/get_multiple";
    return await axiosInstance.get(url, requestOptions);
  }
}

/**
 * Function này sẽ nhận vào một axios instance để setup axios instance đã config
 * ở file `axiosInstance.js`. Khi ở file này có thay đổi thì không cần phải sửa quá nhiều nơi.
 * Trả về function dùng để gọi tới server để tạo một blog.
 * @param {AxiosInstance} axiosInstance Một custom axios function đã config từ trước.
 * @returns {(options: AxiosRequestConfig) => Promise<AxiosResponse>}
 */
export function configureCreateBlogAsyncFunc(axiosInstance) {
  /**
   * Nhận vào các thuộc tính request config cho axios instance.
   * @param {AxiosRequestConfig} requestOptions Các thuộc tính cấu hình cho request.
   * @returns {Promise<AxiosResponse>}
   * 
   * @example
   * // Usage
   * const blogDetail = await createBlogAsync({ headers: { Authorization }, body: blogData });
   */
  return async function createBlogAsync(requestOptions) {
    let url = blogBaseURL + "create";

    if(!requestOptions.body) return false;

    return Boolean(await axiosInstance.post(url, requestOptions)); 
  }
}

/**
 * Function này sẽ nhận vào một axios instance để setup axios instance đã config
 * ở file `axiosInstance.js`. Khi ở file này có thay đổi thì không cần phải sửa quá nhiều nơi.
 * Trả về function dùng để gọi tới server để xóa một blog.
 * @param {AxiosInstance} axiosInstance Một custom axios function đã config từ trước.
 * @returns {(options: AxiosRequestConfig) => Promise<AxiosResponse>}
 */
export function configureDeleteBlogAsyncFunc(axiosInstance) {
  /**
   * Nhận vào các thuộc tính request config cho axios instance.
   * @param {AxiosRequestConfig} requestOptions Các thuộc tính cấu hình cho request.
   * @returns {Promise<AxiosResponse>}
   * 
   * @example
   * // Usage
   * const isBlogDeleted = await deleteBlogAsync({ params: { id: 'bl_01' } });
   */
  return async function deleteBlogAsync(requestOptions) {
    let url = blogBaseURL + "delete";

    return Boolean(await axiosInstance.delete(url, requestOptions)); 
  }
}