import { configureStore, combineReducers } from "@reduxjs/toolkit";

import blogReducer from './blog/blogSlice';
import userReducer from './user/userSlice';

// Slice chỉ là các file setup các reducers trong app.
// "Slice là một tập hợp các actions và logic trong một reducer".
// store.js mới là file config store chính thức để có thể xài.

// Tạm thời trong store chỉ cài đặt reducer của BlogSlice thôi
// Say này có nhiều Reducer (từ Slice) thì sẽ dùng phương thức khác
// để gom các reducer lại thành 1.
// Khi cài đặt xong thì export store ra để dùng, thì store này sẽ được
// dùng ở trong file chứa cấu trúc cao nhất của app, App.jsx

/**
 * __Hướng dẫn sử dụng__
 * 
 * Để sử dụng được `store` thì phải import nó vào trong file App.jsx hoặc
 * file endpoint khác.
 * 
 * Sau đó import Provider từ package react-redux và
 * cho Provider bọc bên ngoài cùng và assign `store` vào trong thuộc tính store
 * của Provider
 * 
 * @example
 * 
 * ...
 * import { Provider } from 'react-redux'
 * 
 * import { store } from 'path/store'
 * 
 * export default function App() {
 *   return (
 *     <Provider store={store}>
 *       <EntireCode />
 *     </Provider>
 *   );
 * }
 * ...
 */
const rootReducer = combineReducers({
  blog: blogReducer,
  user: userReducer
});

export const store = configureStore({
  reducer: rootReducer
});

/*
  Để dùng được các global state, actions thì xem ví dụ trong BlogScreen.
*/