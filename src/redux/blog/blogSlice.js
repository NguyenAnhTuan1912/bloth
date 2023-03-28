import { createSlice } from "@reduxjs/toolkit";

import { BlogCardProps } from "share/types/index.d";

import { BlogCardDataCollection } from "data/BlogCardData";

// Define và assign một số state mặc định để init slice
// Trong state có một số thuộc tính sau
// - blogsBrief: Là các thông tin ngắn gọn của blog dùng để hiển thị. (Nó chính là thông tin cho BlogCard)
// - blogDetails: Là thông tin chi tiết của blog nào đó (tương lai có thể cho phép chứa nhiều details hơn).
const blogDetails = {
  _id: "",
  image: "",
  title: "",
  authorId: "",
  contentId: [],
  commentIds: [],
  type: [],
  likes: 0,
  numberOfComments: 0,
  readTime: 0,
  isRecommended: false,
  createAt: 0,
  updateAt: 0
}

const initialState = {
  blogsBrief: [],
  blogDetails
}

/**
 * Blog Slice chứa các reducer functions liên quan tới blog.
 * Hiện tại thì các reducer function chỉ mới có nhiêu đó.
 * Sau này còn gọi về server để lấy dữ liệu thì update sau.
 * Một số reducer functions đang có trong blogSlice:
 * 
 * @example
 * ...
 * //Function này dùng để lấy tất cả thông tin ngắn (hiện đang được lưu trong store) cho BlogCard.
 * // Tạm thời là lấy trong data, sau này thì sẽ gọi về server để lấy dữ liệu.
 * getBlogsBrief(state, action)
 * 
 * //Function này dùng để thông tin chi tiết của một blog nào đó khi ấn vào BlogCard.
 * getBlogDetails(state, action)
 * ...
 */
export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    getBlogsBrief: (state, action) => {
      state.blogsBrief = BlogCardDataCollection;
    },

    getBlogDetails: (state, action) => {
      let blogId = action.payload;
      console.log(blogId);
    }
  }
});

export const { getBlogDetails, getBlogsBrief } = blogSlice.actions;
export default blogSlice.reducer;