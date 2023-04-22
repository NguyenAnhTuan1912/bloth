import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getBlogAsync, getBlogsAsync } from "api";

import { BlogCardDataCollection } from "data/BlogCardData";

import { BlogCardProps, BlogProps, BlogBriefProps, BlogAuthorProps } from "share/types/index.d";

// Ở đây là các function hỗ trợ cho Slice

/**
 * Function này tính toán việc giảm dữ liệu đi ở một mức nào đó.
 * Tránh việc giảm về quá 0.
 * @param {number} value Số cần giảm
 * @param {number} amount Lượng cần giảm
 * @returns 
 */
function descreaseByAmount(value, amount) {
  let afterDescrease = value - amount;
  if(afterDescrease >= amount) value -= amount;
  else value = 0;
  return value;
}

/**
 * Hàm này sẽ tạo ra một object mặc định và mới cho BriefPlace.
 * @returns 
 */
function createDefaultBrief() {
  return ({
    limit: 5,
    skip: 0,
    data: []
  })
}

// Define và assign một số state mặc định để init slice
// Trong state có một số thuộc tính sau
// - briefBlogs: Là các thông tin ngắn gọn của blog dùng để hiển thị. (Nó chính là thông tin cho BlogCard)
// - blogDetails: Là thông tin chi tiết của blog nào đó (tương lai có thể cho phép chứa nhiều details hơn).
/**
 * @type {BlogProps}
 */
const blogDetails = {
  _id: "",
  image: "",
  title: "",
  /**
   * @type {BlogAuthorProps}
   */
  author: {
    _id: "",
    firstName: "",
    lastName: "",
    followingIds: [],
    followerIds: [],
    bio: "",
    career: "",
    presentationImage: ""
  },
  content: "",
  type: "",
  likes: 0,
  readTime: 0,
  isRecommended: false,
  createAt: 0,
  updateAt: 0
}

const initialState = {
  /**
   * @type {{[key: string]: BlogBriefProps}}
   */
  briefBlogs: {},
  blogDetails
}

export const fetchBriefBlogsByType = createAsyncThunk(
  "blog/fetchBriefBlogsByType",
  /**
   * 
   * @param {{typeOfBlog: string, fields: string}} requestedOptions 
   * @param thunkAPI
   */
  async (requestedOptions, thunkAPI) => {
    const state = thunkAPI.getState();
    const { typeOfBlog, fields } = requestedOptions;
    const briefBlogsByType = briefBlogsSelector(state, typeOfBlog);
    const limit = briefBlogsByType ? briefBlogsByType.limit : 5;
    const skip = briefBlogsByType ? briefBlogsByType.skip : 0;
    const options = {
      params: {
        limit: limit,
        skip: skip,
        criterias: `type:${typeOfBlog}`,
        fields: fields
      }
    };
    const res = await getBlogsAsync(options);
    console.log("GET BLOGS SUCCESSFULLY!");
    return [typeOfBlog, res.data]
  }
)

export const fetchBlogDetailsById = createAsyncThunk(
  "blog/fetchBlogDetailsById",
  async (id) => {
    const options = {
      params: {
        id: id
      }
    };
    const res = await getBlogAsync(options);
    return res.data;
  }
)

/*
  NOTE: Hiện tại slice đang được thiết kế theo kiểu.
  - Cho phép update skip amount của một loại BriefBlog nào đó.
  - Khi Brief Blog sẽ luôn là undefined bởi vì nó sẽ không được tạo mặc định. Tại sao?
  Bởi vì có nó thể gây ra render lại không mong muốn (cái này là do mình cài đặt thôi). Ví dụ:
  Khi lần đầu select ra một loại Brief Blog nào đó thì chắc chắn value của nó là undefined.
  Tuy nhiên trong useBriefBlog thì nó sẽ check xem nếu briefBlog đó là undefined thì nó sẽ tạo
  ra một briefBlog mới dựa theo type đó. Đó thì như đã nói nó sẽ gây ra vấn đề render nhiều lần,
  và gây khó khăn hơn khi check.
  - Tạm thời là bỏ blogDetails vì lý do là blog detail sẽ khá nhiều dữ liệu. Mà vấn đề là mình
  chỉ cần blog đó hiện lên một lần rồi xoá, như thế sẽ đỡ chiếm lấy bộ nhớ của mình. Cho nên là mỗi
  khi vào BlogDetailsScreen thì mình chỉ cần gọi API để lấy thông tin chi tiết của blog đó là được.
*/

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
    /**
     * 
     * @param state 
     * @param {{type:string, payload: BlogProps}} action 
     */
    updateBlogDetails: (state, action) => {
      let blogDetails = action.payload;
      state.blogDetails = Object.assign({}, state.blogDetails, blogDetails);
    },

    /**
     * Action này dùng để tăng thông số limit của một briefBlogs
     * @param state 
     * @param {{type: string, payload: [string, number]}} action 
     */
    inscreaseSkipBriefBlogsAmount: (state, action) => {
      let typeOfBlog = action.payload;
      state.briefBlogs[typeOfBlog].skip += state.briefBlogs[typeOfBlog].limit;
    },

    /**
     * Action này dùng để tăng thông số limit của một briefBlogs
     * @param state 
     * @param {{type: string, payload: [string, number]}} action 
     */
    descreaseSkipBriefBlogsAmount: (state, action) => {
      let typeOfBlog = action.payload;
      state.briefBlogs[typeOfBlog].skip = descreaseByAmount(state.briefBlogs[typeOfBlog].skip, state.briefBlogs[typeOfBlog].limit);
    },

    /**
     * Hãy cẩn thận khi xài action này. Nó sẽ clear toàn bộ dữ liêu về tất cả brief blogs.
     * @param state 
     * @param action 
     */
    clearAllBriefBlogs: (state, action) => {
      state.briefBlogs = {};
    },

    /**
     * 
     * @param state 
     * @param {{type: string, payload: string}} action 
     */
    createBriefBlogs: (state, action) => {
      let typeOfBlog = action.payload;
      if(!state.briefBlogs[typeOfBlog]) {
        state.briefBlogs[typeOfBlog] = createDefaultBrief();
      }
    }
  },

  // Extra reducer là do hành vi của thunk.
  extraReducers: builder => {
    builder.addCase(fetchBriefBlogsByType.fulfilled, (state, action) => {
      let [typeOfBlog, briefBlogs] = action.payload;

      if(!state.briefBlogs[typeOfBlog]) {
        state.briefBlogs[typeOfBlog] = createDefaultBrief();
      }

      if(briefBlogs.length === 0) {
        state.briefBlogs[typeOfBlog].skip = descreaseByAmount(state.briefBlogs[typeOfBlog].skip, state.briefBlogs[typeOfBlog].limit);
      }

      state.briefBlogs[typeOfBlog].data.push(...briefBlogs);
    });

    builder.addCase(fetchBlogDetailsById.fulfilled, (state, action) => {
      let newBlogDetails = action.payload;
      state.blogDetails = newBlogDetails;
    });
  }
});

export const { 
  updateBlogDetails,
  inscreaseSkipBriefBlogsAmount,
  descreaseSkipBriefBlogsAmount,
  createBriefBlogs,
  clearAllBriefBlogs
} = blogSlice.actions;
export default blogSlice.reducer;

// Các hàm selector cho blog
/**
 * Seleteor trả về một dữ liệu chi tiết của một blog.
 * @param state 
 * @returns {BlogProps}
 */
export function blogDetailsSelector(state) {
  return state.blog.blogDetails;
}

/**
 * Selector trả về một mảng các blog theo type.
 * @param state 
 * @param {string} typeOfBlog Type của blogs.
 * @returns {BlogBriefProps}
 */
export function briefBlogsSelector(state, typeOfBlog) {
  // console.log("ALL BLOG BRIEF: ", state.blog.briefBlogs);
  return state.blog.briefBlogs[typeOfBlog];
}