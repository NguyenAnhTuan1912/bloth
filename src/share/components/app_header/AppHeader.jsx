import { View, Text } from 'react-native'
import React from 'react'
import { NavigationProp, RouteProp, ParamListBase, useNavigation } from '@react-navigation/native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button, IconButton, useTheme } from 'react-native-paper'

import AppText from '../app_text/AppText'

import styles from './AppHeaderStyles'
import app_c from 'styles/colors'
import app_sh from 'styles/shape'

import { NavigationProps } from 'share/types/index.d'

/**
 * @typedef CustomScreenOptionsProps
 * @property {boolean} headerTransparent [Override Property] Thuộc tính chỉnh transparent cho header's background.
 * @property {boolean} isTopScreen [Custom Property] Thuộc tính cho biết screen có phải là top screen hay không?
 * @property {string} title [Override Property] Thuộc tính chỉnh title cho header's background.
 */

/**
 * @typedef HeaderProps
 * @property {string} screenName Tên của screen.
 * @property {CustomScreenOptionsProps} options [Override NativeStackNavigationOptions] Options của screen.
 * @property {{ title: string } | undefined} back Là một object cho header biết là có thể trở lại được hay không? Chứa một object có thuộc tính title dùng để set label cho back button.
 * @property {() => JSX.Element} setLeftPart Function cho phép custom phần bên trái của Header.
 * @property {() => JSX.Element} setCenterPart Function cho phép custom phần giữa của Header.
 * @property {() => JSX.Element} setRightPart Function cho phép custom phần phải trái của Header.
 */

 /**
 * __Creator__: @NguyenAnhTuan1912
 * 
 * Đây sẽ là phần header của screen, mỗi screen sẽ có một header khác nhau, tuy nhiên thì cấu trúc cơ bản của nó là giống nhau.
 * Header sẽ được chia làm 3 phần, phần trái, giữa và phải. Header mặc định sẽ có một nút để back và một nút tìm kiếm.
 * @param {HeaderProps & NavigationProps} props - Props của component.
 * @returns `View` component với styles
 */
const AppHeader = ({
  screenName,
  navigation,
  route,
  options,
  back,
  setLeftPart,
  setCenterPart,
  setRightPart
}) => {
  console.log("Can go back?", back);
  const theme = useTheme();
  const canSetLeftPart = typeof setLeftPart === 'function';
  const canSetCenterPart = typeof setCenterPart === 'function';
  const canSetRightPart = typeof setRightPart === 'function';
  const canSetBackButton = back;
  const title = (
    options.title !== "" && options.title
    ? options.title
    : screenName !== "" && screenName
    ? screenName
    : route.name
  )
  const transparent = options.headerTransparent;

  const headerStyle = {
    ...styles.container,
    backgroundColor: theme.colors.background,
    borderBottomColor: theme.colors.outlineVariant,
    borderBottomWidth: 1,
    ...(transparent ?  { backgroundColor: `rgba(${app_c.RGB.primary}, 0)` } : {} )
  }

  // console.log(`${title} can go back? ${navigation.canGoBack()}`);

  return (
    <View style={headerStyle}>
      {/* Phần bên trái */}
      {canSetLeftPart
        ? setLeftPart()
        : (
          <View style={{...styles.header_col, justifyContent: 'flex-start', alignItems: 'center'}}>
            {
              canSetBackButton
              && (
                <IconButton
                  mode="text"
                  onPress={() => { navigation.goBack() }}
                  icon={({size, color}) => (
                    <Ionicons name="chevron-back-outline" size={18} color={color} />
                  )}
                />
              )
            }
          </View>
        )
      }

      {/* Phần ở giữa */}
      {canSetCenterPart
        ? setCenterPart()
        : (
          <View style={{...styles.header_col, justifyContent: 'center', alignItems: 'center'}}>
            <AppText weight="lighter" font="h5" color={theme.colors.onBackground} style={{textAlign: 'center'}}>{title}</AppText>
          </View>
        )
      }

      {/* Phần bên phải */}
      {canSetRightPart
        ? setRightPart()
        : (
          <View style={{...styles.header_col, justifyContent: 'flex-end', alignItems: 'center'}}>
            <IconButton
              onPress={() => {}}
              icon={({size, color}) => (
                <Ionicons name="search-outline" size={18} color={color} />
              )}
            />
          </View>
        )
      }
    </View>
  )
}

export default AppHeader