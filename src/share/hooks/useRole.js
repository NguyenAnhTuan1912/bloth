import { useSelector, useDispatch } from "react-redux";

import {
  userRoleSeletor,
  updateUserRole,
  USER_ROLES
} from 'app_redux/user/userSlice'

/**
 * __HOOK__
 * 
 * Đây là một custom hook dùng để lấy ra role hiện tại của user. Ngoài ra thì còn
 * rút gọn lại quá trình lấy user role, thay vì import các action, roles trong `userSlide`
 * thì giờ mình chỉ cần dùng hook này là xong.
 * @returns {{ userRole: keyof USER_ROLES, dispatchUserRoleUpdate: (role: keyof USER_ROLES) => void}}
 * @example
 * ...
 * // Import hook
 * import { useRole } from 'share/hooks/useRole';
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
  const dispatch = useDispatch();
  /**
   * Function này dùng để update role cho user.
   * @param {keyof USER_ROLES} role 
   * @returns 
   */
  const dispatchUserRoleUpdate = (role) => dispatch(updateUserRole(role));
  return { userRole, dispatchUserRoleUpdate };
}