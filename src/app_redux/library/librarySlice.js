import { createSlice } from "@reduxjs/toolkit";

import { BlogCardDataCollection } from "data/BlogCardData";

const libraryDetails = {
    _id: "",
    name: "",
    desscription: "",
    userId : "",
    blogIds: [],
    authorIds: [],
    numberOfAuthors: 0,
    numberOfBlogs: 0,
    createAt: 0,
    updateAt: 0
}

const initialState = {
    librarysBrief: [],
    libraryDetails
  }

  export const librarySlice = createSlice({
    name: "library",
    initialState,
    reducers: {
      getLibrarysBrief: (state, action) => {
        state.librarysBrief = BlogCardDataCollection;
      },
  
      getLibraryDetails: (state, action) => {
        let libraryId = action.payload;
        console.log(libraryId);
      }
    }
  });
  
  export const { getLibraryDetails, getUsesBgetLibrarysBriefrief } = librarySlice.actions;
  export default librarySlice.reducer;