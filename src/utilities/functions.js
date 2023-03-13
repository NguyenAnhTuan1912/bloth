import { 
  getFocusedRouteNameFromRoute,
  RouteProp,
  ParamListBase
} from "@react-navigation/native";

/**
 * __Creator__: @NguyenAnhTuan1912
 * 
 * Hàm trả về tên của một route đang được active. Nếu như muốn setup title cho cho các screen trong navigator con, ví dụ như là
 * một Stack navigator nằm trong screen của Tab navigator, thì dùng hàm này cho thuộc tính `options` của Tab screen.
 * 
 * __How to use?__
 * @example
 * ```jsx
 * <Tab.Screen
 *  options={({route}) => (
 *    {
 *      title: FunctionsUtility.getHeaderTitle(route)
 *    }
 *  )}
 * />
 * ```
 *
 * @param {RouteProp<ParamListBase, string>} route Tên của route.
 * @returns Trả về tên của route đang được active.
 */
function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route);
  return routeName;
}

/**
 * Hàm này dùng để xử lý các tác vụ bất đồng bộ. Thay vì viết `setTimeout` thì có thể dùng hàm này cho gọn.
 * 
 * __How to use?__
 * ```js
 * asyncTask(1000)
 * .then(message => {
 *  console.log(message); // Done
 * // Các task khác ở đây.
 * })
 * ```
 * 
 * @param {number} milisecond Thời gian chờ của task.
 */
function asyncTask(milisecond) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, milisecond)
  });
}

/**
 * Hàm này sẽ nhận vào một biến điều kiện, đồng thời là một mảng gồm 2 phần tử là chữ mà cần chọn dựa theo điều kiện.
 * Nó sẽ chọn 1 trong hai chuỗi được truyền vào đó. Nếu `condition = true` thì nó sẽ chọn chuỗi đầu tiên, và ngược lại.
 * Do thằng React Native Paper ngu quá nên t phải làm cái hàm này.
 * 
 * __How to use?__
 * ```js
 * const condition = true;
 * switchTextByCondition(condition, ["checked", "unchecked"]); // Trả về "checked"
 * ```
 * @param {boolean} condition Điều khiện
 * @param {*} texts 
 * @returns 
 */
function switchTextByCondition(condition, texts) {
  return condition ? texts[0] : texts[1]
}

const FunctionsUtility = {
  getHeaderTitle,
  asyncTask,
  switchTextByCondition
}

export default FunctionsUtility;