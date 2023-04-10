import {
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native'
import { NavigationContainer, RouteProp, ParamListBase, NavigationProp } from '@react-navigation/native'

/**
 * @typedef NavigationProps
 * @property {RouteProp<ParamListBase, string>} route
 * @property {NavigationProp<T>} navigation
 */

/**
 * @typedef ScreenProps
 * @property {NavigationProp<T>} appNavigation
 */

/**
 * @typedef {ViewProps} ViewProps Các properties của `View`.
 */

/**
 * @typedef {StyleProp<ViewStyle>} ViewStyles Các properties của View Style.
 */

/**
 * @typedef BlogCardProps
 * @property {string} id Id của blog.
 * @property {string} authorName Tên tác giả của blog.
 * @property {string} authorImage Ảnh đại diện của tác giả.
 * @property {string} title Tiêu đề của blog.
 * @property {string} image Ảnh của blog.
 * @property {number} createdAt Thời điểm blog được tạo, publish.
 * @property {number} readTime Thời gian đọc blog được tính bằng giây (tương đối).
 * @property {boolean} isRecommended Blog có được đề xuất hay không?
 */

export {}