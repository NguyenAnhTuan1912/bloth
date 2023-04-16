import { createSlice } from "@reduxjs/toolkit";

const userDeltais = {
    _id: "",
    libraryId : "",
    savedBlogIds : [],
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
    createAt : 0,
    updateAt : 0
}

const initialState = {
    usersBrief: [],
    userDeltais
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      getUsersBrief: (state, action) => {
        state.usersBrief = BlogCardDataCollection;
      },
  
      getUserDetails: (state, action) => {
        let userId = action.payload;
        console.log(userId);
      }
    }
  });
  
  export const { getUseDetails, getUsesBrief } = userSlice.actions;
  export default userSlice.reducer;