import { axiosInstance } from "./axiosInstance";
// Lấy ra các config function để tạo function gọi API cho BLOG
import {
  configGetBlogAsyncFunc,
  configGetBlogsAsyncFunc,
  configCreateBlogAsyncFunc,
  configDeleteBlogAsyncFunc
} from './blogAPI'

// Các API khác ở đây

// Config xong rồi export luôn.
// Mấy cái API như Library, user thì tương tự.
export const getBlogAsync = configGetBlogAsyncFunc(axiosInstance);
export const getBlogsAsync = configGetBlogsAsyncFunc(axiosInstance);
export const createBlogAsync = configCreateBlogAsyncFunc(axiosInstance);
export const deleteBlogAsync = configDeleteBlogAsyncFunc(axiosInstance);