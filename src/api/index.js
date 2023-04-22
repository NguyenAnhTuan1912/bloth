import { axiosInstance } from "./axiosInstance";
// Lấy ra các config function để tạo function gọi API cho BLOG
import {
  configureGetBlogAsyncFunc,
  configureGetBlogsAsyncFunc,
  configureCreateBlogAsyncFunc,
  configureDeleteBlogAsyncFunc
} from './blogAPI'
// Các API khác ở đây
// Lấy ra các config function để tạo function gọi API cho USER
import {
  configureSignInAsyncFunc,
  configureSignUpAsyncFunc,
  configureUpdatePasswordAsyncFunc,
  configureForgotPasswordAsyncFunc,
  configureAuthorizeAsyncFunc
} from './userAPI'

// Config xong rồi export luôn.
// Mấy cái API như Library, user thì tương tự.
export const getBlogAsync = configureGetBlogAsyncFunc(axiosInstance);
export const getBlogsAsync = configureGetBlogsAsyncFunc(axiosInstance);
export const createBlogAsync = configureCreateBlogAsyncFunc(axiosInstance);
export const deleteBlogAsync = configureDeleteBlogAsyncFunc(axiosInstance);

export const signInAsync = configureSignInAsyncFunc(axiosInstance);
export const signUpAsync = configureSignUpAsyncFunc(axiosInstance);
export const updatePasswordAsync = configureUpdatePasswordAsyncFunc(axiosInstance);
export const forgotPasswordAsync = configureForgotPasswordAsyncFunc(axiosInstance);
export const authorizeAsync = configureAuthorizeAsyncFunc(axiosInstance);