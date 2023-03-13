import { View, Text, StatusBar } from 'react-native'
import React from 'react'

import Constants from 'expo-constants';

/**
 * @typedef CustomeStatusBarProps
 * @property {string} backgroundColor Màu cho background của status bar.
 * @property {'light' | 'dark'} theme Theme của app.
 * @property {'ios' | 'android'} platform Nền tảng mà app đang chạy.
 */

/**
 * Dùng để custom Background cho status bar.
 * @param {CustomeStatusBarProps} props Props của component
 * @return `View` chứa `StatusBar` ở trong.
 */
export default function CustomStatusBar(
  {
    backgroundColor,
    theme = "light",
    platform
  }
) {
   return (
    platform === 'ios'
    ? (
      <View
        style={{
          width: '100%',
          height: Constants.statusBarHeight,
          position: 'absolute',
          zIndex: 1000,
          backgroundColor
        }}
      >
        <StatusBar
          animated={true}
          backgroundColor
          barStyle={theme === "light" ? "dark-content" : "light-content"}
        />
      </View>
    )
    : (
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={theme === "light" ? "dark-content" : "light-content"}
      />
    )
  )
}