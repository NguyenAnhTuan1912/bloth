import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { 
  updateBlogDetails,
  inscreaseSkipBriefBlogsAmount,
  descreaseSkipBriefBlogsAmount,
  createBriefBlogs,
  clearAllBriefBlogs,
  briefBlogsSelector,
  blogDetailsSelector,
  fetchBriefBlogsByType,
  fetchBlogDetailsById
} from 'app_redux/blog/blogSlice'

import { BlogProps } from "share/types/index.d";

/*
  Các custom hook này dùng để làm ngắn lại việc sử dụng redux trong app. Thay vì
  import lại tất cả các code như trên ở nhiều nơi thì giờ mình chỉ cần import các hook này là được.
*/

/**
 * __CUSTOM REDUX HOOK__
 * 
 * __SLICE__: blog
 * 
 * Hook này dùng để tương tác với `blogDetails` state ở trên Redux store.
 * @returns []
 */
export function useBlogDetails() {
  let blog = useSelector(blogDetailsSelector);
  let d__ = useDispatch();
  
  let blogDispatcher = {
    updateBlogDetails: newBlogDetails => d__(updateBlogDetails(newBlogDetails)),
    fetchBlogDetailsById: id => d__(fetchBlogDetailsById(id))
  }

  return ({
    blog,
    blogDispatcher
  })
}

/**
 * __CUSTOM REDUX HOOK__
 * 
 * __SLICE__: blog
 * 
 * Hook này dùng để tương tác với `briefBlogs` trong state của Redux store.
 * @param {string} typeOfBlog Type của blogs.
 */
export function useBriefBlogs(typeOfBlog) {
  let blogs = useSelector(state => briefBlogsSelector(state, typeOfBlog));

  // React.useEffect(() => {
  //   if(!blogs) blogsDispatcher.createBriefBlogs();
  // }, [typeOfBlog])

  // console.log("INIT BLOGS: ", blogs);
  let d__ = useDispatch();

  let blogsDispatcher = {
    inscreaseSkip: () => d__(inscreaseSkipBriefBlogsAmount(typeOfBlog)),
    descreaseSkip: () => d__(descreaseSkipBriefBlogsAmount(typeOfBlog)),
    createBriefBlogs: () => d__(createBriefBlogs(typeOfBlog)),
    fetchBriefBlogs: (fields) => d__(fetchBriefBlogsByType({typeOfBlog, fields})),
    clearAll: () => d__(clearAllBriefBlogs())
  }


  return ({
    blogs,
    blogsDispatcher
  })
}