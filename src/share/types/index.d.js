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
 * @property {object} author
 * @property {string} author.lastName Họ của tác giả của blog.
 * @property {string} author.firstName Tên của tác giả của blog.
 * @property {string} author.presentationImage Ảnh đại diện của tác giả.
 * @property {string} title Tiêu đề của blog.
 * @property {string} image Ảnh của blog.
 * @property {number} createAt Thời điểm blog được tạo, publish.
 * @property {number} readTime Thời gian đọc blog được tính bằng giây (tương đối).
 * @property {boolean} isRecommended Blog có được đề xuất hay không?
 */

/**
 * @typedef BlogBriefProps
 * @property {number} limit Số lượng các blog trong mỗi lần request.
 * @property {number} skip Số lượng các blog mong muốn bỏ qua.
 * @property {Array<any>} data Dữ liệu của các brief blog.
 */

/**
 * @typedef BlogAuthorProps
 * @property {string} _id
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} followingIds
 * @property {Array<string>} followerIds
 * @property {string} bio
 * @property {string} career
 * @property {string} presentationImage
 */

/**
 * @typedef BlogProps
 * @property {string} _id
 * @property {string} image
 * @property {string} title
 * @property {BlogAuthorProps} author
 * @property {string} content
 * @property {string} type
 * @property {number} likes
 * @property {number} readTime
 * @property {number} numberOfComments
 * @property {boolean} isRecommended
 * @property {string} createAt
 * @property {string} updateAt
 */

/**
 * @typedef UserProps
 * @property {string} _id
 * @property {Array<string>} libraryIds
 * @property {Array<string>} likedBlogIds
 * @property {Array<string>} savedBlogIds
 * @property {Array<string>} followingIds
 * @property {Array<string>} followerIds
 * @property {string} dateOfBirth
 * @property {string} username
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} activedEmail
 * @property {Array<string>} interestedTypeOfBlogs
 * @property {string} bio
 * @property {string} career
 * @property {string} presentationImage
 * @property {string} createAt
 * @property {string} updateAt
 */

/**
 * @typedef NotificationProps
 * @property {"success" | "info" | "error" | "warning"} type
 * @property {string} title
 * @property {string} message
 * @property {number} duration
 * @property {boolean} visible
 */

export {}