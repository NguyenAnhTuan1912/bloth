import {
  useSelector,
  useDispatch
} from 'react-redux'

import { 
  updateIsLoading,
  toggleIsLoading,
  updateNotification,
  showNotification,
  hideNofitication,
  isLoadingSelector,
  notificationSelector
} from "app_redux/manifold/manifoldSlice";

import { NotificationProps } from 'share/types/index.d';

/**
 * __CUSTOM REDUX HOOK__
 * 
 * __SLICE__: manifold
 * 
 * Hook này dùng để lấy ra trạng thái `isLoading`, mình dùng cái này khi cần sử lý một
 * một yêu cầu nào đó cần thời gian loading.
 * @returns 
 */
export function useLoading() {
  let isLoading = useSelector(isLoadingSelector);
  let d__ = useDispatch();

  let loadingDispatcher = {
    updateIsLoading: status => d__(updateIsLoading(status)),
    toggleIsLoading: () => d__(toggleIsLoading())
  }

  return { isLoading, loadingDispatcher }
}

export function useNotification() {
  let notification = useSelector(notificationSelector);
  let d__ = useDispatch();

  let notificationDispatcher = {
    /**
     * Update thông tin cho notification.
     * @param {NotificationProps} notification 
     * @returns 
     */
    updateNotification: notification => d__(updateNotification(notification)),
    /**
     * Hiển thị notification.
     * @param {string} message
     * @param {string} title
     * @param {"success" | "info" | "error" | "warning"} type
     * @returns 
     */
    show: (message, title = "You have a message", type = "info") => d__(showNotification({title, message, type})),
    /**
     * Ẩn notification đi.
     * @returns 
     */
    hide: () => d__(hideNofitication())
  }

  return { notification, notificationDispatcher }
}