import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getBlogsAsync } from "api";

import { BlogCardDataCollection } from "data/BlogCardData";

import { BlogCardProps } from "share/types/index.d";

/**
 * @typedef BlogBriefProps
 * @property {number} limit Số lượng các blog trong mỗi lần request.
 * @property {number} skip Số lượng các blog mong muốn bỏ qua.
 * @property {Array<any>} data Dữ liệu của các brief blog.
 */

// Define và assign một số state mặc định để init slice
// Trong state có một số thuộc tính sau
// - briefBlogs: Là các thông tin ngắn gọn của blog dùng để hiển thị. (Nó chính là thông tin cho BlogCard)
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

const briefBlogDefault = {
  limit: 7,
  skip: 0,
  data: []
}

const initialState = {
  /**
   * @type {{[key: string]: BlogBriefProps}}
   */
  briefBlogs: {},
  blogDetails
}

export const fetchBriefBlogByType = createAsyncThunk(
  "blog/fetchBriefBlogByType",
  /**
   * 
   * @param {{typeOfBlog: string, fields: string}} requestedOptions 
   * @param thunkAPI 
   */
  async (requestedOptions, thunkAPI) => {
    const state = thunkAPI.getState();
    const { typeOfBlog, fields } = requestedOptions;
    const briefBlogByType = briefBlogsSelector(state, typeOfBlog);
    const options = {
      params: {
        limit: briefBlogByType.limit,
        skip: briefBlogByType.skip,
        criterias: `type:${typeOfBlog}`,
        fields: fields
      }
    };
    console.log("FETCH DATAAAA");
    const res = await getBlogsAsync(options);
    return [typeOfBlog, res.data]
  }
)

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
    updateBlogDetails: (state, action) => {
      let blogDetails = action.payload;
      state.blogDetails = Object.assign({}, state.blogDetails, blogDetails);
    },

    updateSkipBriefBlogAmount: (state, action) => {
      let [typeOfBlog, skip] = action.payload;
      state.briefBlogs[typeOfBlog].skip += skip;
    },

    createBriefBlog: (state, action) => {
      let typeOfBlog = action.payload;
      if(!state.briefBlogs[typeOfBlog]) {
        state.briefBlogs[typeOfBlog] = {...briefBlogDefault};
      }
    }
  },

  // Extra reducer là do hành vi của thunk.
  extraReducers: builder => {
    builder.addCase(fetchBriefBlogByType.fulfilled, (state, action) => {
      let [typeOfBlog, blogBrief] = action.payload;
      state.briefBlogs[typeOfBlog].data = blogBrief;
    });
  }
});

export const { 
  updateBlogDetails,
  updateSkipBlogBriefAmount,
  createBriefBlog
} = blogSlice.actions;
export default blogSlice.reducer;

// Các hàm selector cho blog
export function blogDetailsSelector(state) {
  return state.blog.blogDetails;
}

export function briefBlogsSelector(state, typeOfBlog) {
  console.log("ALL BLOG BRIEF: ", state.blog.briefBlogs);
  return state.blog.briefBlogs[typeOfBlog];
}