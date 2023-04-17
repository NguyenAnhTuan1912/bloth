import { createSlice } from "@reduxjs/toolkit";

const userDeltais = {
    _id: "",
    libraryId : "",
    savedBlogIds : [],
    likeddBlogIds : [],
    followingIds : [],
    followerIds: [],
    dateOfBirth : 0,
    username : "",
    firstName : "",
    lastName : "",
    email : "",
    activedEmail : 0,
    password : "",
    encodedPassword : "",
    interestedTypeOfBlogs : [],
    registerFrom: "",
    bio: "",
    presentationImage: "",
    career: "student",
    createAt : 0,
    updateAt : 0
}
// Như đã nói thì user có 3 role. Guest, Non actived account và Actived account.
// Khởi tạo là ""
const initialState = {
    otherUsersBrief: {},
    userDeltais,
    userRole: ""
}

export const USER_ROLES = {
  "GUEST": 'GUEST',
  "ACTIVED_ACCOUNT": 'ACTIVED_ACCOUNT',
  "NON_ACTIVED_ACCOUNT": 'NON_ACTIVED_ACCOUNT',
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    /**
     * 
     * @param state 
     * @param {{type: string, payload: "GUEST" | "ACTIVED_ACCOUNT" | "NON_ACTIVED_ACCOUNT"}} action 
     */
    updateUserRole: (state, action) => {
      let role = action.payload;
      state.userRole = role;
    },

    updateUserDetails: (state, action) => {
      let user = action.payload;
      state.userDeltais = Object.assign({}, state.userDeltais, user);
    }
  }
});

export const { 
  updateUserRole,
  updateUserDetails
} = userSlice.actions;
export default userSlice.reducer;

// Các hàm selector, viết cho dễ dùng
export function userDetailSelector(state) {
  return state.user.userDeltais
}

export function otherUserSelector(state) {
  return state.user.otherUsersBrief;
}

export function anotherUserSelector(state, userId) {
  return state.user.otherUsersBrief[userId];
}

export function userRoleSeletor(state) {
  return state.user.userRole;
}