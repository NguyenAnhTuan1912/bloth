import { createSlice } from "@reduxjs/toolkit";

import { NotificationProps } from "share/types/index.d";

/*
  Slice này là dùng cho một số thứ linh tinh. Thông thường thì nó sẽ chứa
  các state cho các global component.
*/

const initialState = {
  isLoading: false,
  /**
   * @type {NotificationProps}
   */
  notification: {
    type: "info",
    title: "",
    message: "",
    duration: 7000,
    visible: false
  }
}

export const manifoldSlice = createSlice({
  name: 'manifold',
  initialState,
  reducers: {
    updateIsLoading: (state, action) => {
      let status = action.payload;
      state.isLoading = status;
    },

    toggleIsLoading: (state, action) => {
      let prevStatus = state.isLoading;
      state.isLoading = !prevStatus;
    },

    /**
     * 
     * @param state 
     * @param {{type: string, payload: NotificationProps}} action 
     */
    updateNotification: (state, action) => {
      let notification = action.payload;
      state.notification = Object.assign({}, state.notification, notification)
    },

    /**
     * 
     * @param state 
     * @param {{type: string, payload: {title: string, message: string}}} action 
     */
    showNotification: (state, action) => {
      let {title, message, type} = action.payload;
      state.notification.visible = true;
      state.notification.title = title;
      state.notification.message = message;
      state.notification.type = type;
    },

    hideNofitication: (state, action) => {
      state.notification.visible = false;
      state.notification.title = "";
      state.notification.message = "";
      state.notification.type = "info";
    }
  }
});

export const {
  updateIsLoading,
  toggleIsLoading,
  updateNotification,
  showNotification,
  hideNofitication
} = manifoldSlice.actions;

export default manifoldSlice.reducer;

/**
 * Seletor trả về trạng thái của `isLoaing`.
 * @param state 
 * @returns {boolean}
 */
export function isLoadingSelector(state) {
  return state.manifold.isLoading;
}

/**
 * Selector này dùng để lấy ra thông tin của notification.
 * @param state 
 * @returns {NotificationProps}
 */
export function notificationSelector(state) {
  return state.manifold.notification;
}