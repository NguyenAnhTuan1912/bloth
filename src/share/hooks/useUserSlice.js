import { useSelector, useDispatch } from "react-redux";

import {
  userRoleSeletor,
  userDetailSelector,
  updateUserRole,
  updateUserDetails,
  USER_ROLES
} from 'app_redux/user/userSlice'

/**
 * __CUSTOM REDUX HOOK__
 * 
 * __SLICE__: user
 * 
 * Đây là một custom hook dùng để lấy ra role hiện tại của user. Ngoài ra thì còn
 * rút gọn lại quá trình lấy user role, thay vì import các action, roles trong `userSlide`
 * thì giờ mình chỉ cần dùng hook này là xong.
 * @returns
 * @example
 * ...
 * // Import hook
 * import { useRole } from 'share/hooks/useUserSlice';
 * 
 * export default MyComponent() {
 *   const { userRole, dispatchUserRoleUpdate } = useRole();
 *   return <Component />
 * }
 * ...
 */
export function useRole() {
  /**
   * @type {keyof USER_ROLES}
   */
  const userRole = useSelector(userRoleSeletor);
  const d__ = useDispatch();

  const userRoleDispatcher = {
    /**
     * 
     * @param {keyof USER_ROLES} role 
     * @returns 
     */
    updateUserRole: role => d__(updateUserRole(role))
  }
  return { userRole, userRoleDispatcher };
}

/**
 * __CUSTOM REDUX HOOK__
 * 
 * __SLICE__: user
 * 
 * Đây là một custom hook dùng để lấy ra thông tin của user. Ngoài ra thì còn
 * rút gọn lại quá trình lấy user details, thay vì import các action, roles trong `userSlide`
 * thì giờ mình chỉ cần dùng hook này là xong.
 * @returns
 * @example
 * ...
 * // Import hook
 * import { useUser } from 'share/hooks/useUserSlice';
 * 
 * export default MyComponent() {
 *   const { user, userDispatcher } = useUser();
 *   return <Component />
 * }
 * ...
 */
export function useUser() {
  const user = useSelector(userDetailSelector);
  const d__ = useDispatch();

  const userDispatcher = {
    updateUserDetails: newUserDetails => d__(updateUserDetails(newUserDetails))
  }

  return { user, userDispatcher }
}