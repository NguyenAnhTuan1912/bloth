import axios from "axios";

import { API_ROOT } from "utilities/constants";

// Axios là một thư viện cho HTTP Request, nó sẽ quản lý tất cả việc resquest của mình
// mà không cần phải config gì phức tạp cả.

// File này là file cài đặt axios cho dự án.
// Bên dưới là cài đặt một cái axios custom cho dự án của mình.
// Thông thường thì có thể import thẳng axios từ package để request luôn
// nhưng vì để custom lại thì mình nên tạo ra một cái instance riêng.

// Instance này dùng để gọi API, xem ví dụ ở các file khác.
export const axiosInstance = axios.create({
  // Base URL, cài này là đường dẫn mặc định của API.
  // Ví dụ bên BE có các route như là blog, library.
  // Nếu như muốn lấy blogs thì phải gọi axios.get("http://localhost:8000/api/blog").
  // Hay lấy ra library axios.get("http://localhost:8000/api/library/id=???", options).
  // Như thế khá bất tiện bởi vì nó quá dài dòng, và khi đổi URL của API thì sửa rất mệt.
  // Cho nên ở đây t sẽ tạo ra một cái instance và config baseURL cho nó.
  // Khi đó mình chỉ cần gọi như này là được
  // axiosInstance.get("blog") hay axiosInstance.get("library/id=???", options).
  // Say này có gì thay đổi ở baseURL thì có thể thay thế dễ dàng.
  baseURL: API_ROOT,

  // Config lại thời gian resquest mặc định.
  // Nếu như resquest quá lâu thì sẽ trả về lỗi 408.
  timeout: 10000,

  // Kiểu dữ liệu trả về, thì tạm thời kiểu dữ liệu trả về là JSON.
  // Bởi vì Mongo cũng trả về dữ liệu JSON.
  responseType: "json"
});