import { View, Text } from 'react-native'
import React from 'react'
import { NavigationProp, RouteProp, ParamListBase } from '@react-navigation/native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button, IconButton, useTheme } from 'react-native-paper'

import AppText from '../app_text/AppText'

import styles from './AppHeaderStyles'
import app_c from 'styles/colors'
import app_sh from 'styles/shape'

/**
 * @typedef NavigationProps
 * @property {RouteProp<ParamListBase, string>} route
 * @property {NavigationProp<T>} navigation
 */

/**
 * @typedef HeaderProps
 * @property {string} props.screenName - Tên của screen.
 * @property {string} props.back.title - Header có background hay không?
 * @property {object} props.options - [Override NativeStackNavigationOptions] Options của screen.
 * @property {boolean} props.options.headerTransparent - [Override Property] Thông số chỉnh transparent cho header's background.
 * @property {string} props.options.title - [Override Property] Thông số chỉnh title cho header's background.
 * @property {'type_1' | 'type_2' | 'type_3' | 'type_4' | 'type_5'} props.options.boxShadowType - [Override Property] Thông số chỉnh boxShadow cho header's background.
 * @property {() => JSX.Element} props.setLeftPart - Function cho phép custom phần bên trái của Header.
 * @property {() => JSX.Element} props.setCenterPart - Function cho phép custom phần giữa của Header.
 * @property {() => JSX.Element} props.setRightPart - Function cho phép custom phần phải trái của Header.
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
  setLeftPart,
  setCenterPart,
  setRightPart
}) => {
  const theme = useTheme();
  const canSetLeftPart = typeof setLeftPart === 'function';
  const canSetCenterPart = typeof setCenterPart === 'function';
  const canSetRightPart = typeof setRightPart === 'function';
  const canSetBackButton = navigation.canGoBack();
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