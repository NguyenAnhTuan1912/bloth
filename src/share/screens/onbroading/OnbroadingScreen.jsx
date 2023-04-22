import { View, Text } from 'react-native'
import React from 'react'

import { useTheme } from 'react-native-paper'

import AppText from 'share/components/app_text/AppText'

import styles from './OnbroadingScreenStyles'

/*
  Onbroading Screen là một screen giới thiệu cho người dùng biết về app của mình. Ngoài ra thì còn
  giới thiệu cho người dùng biết một số thứ nữa. Và cũng có thể dùng để thu thập một số thông tin của người dùng luôn
  . Cho nên là screen này t sẽ cố gắng làm đủ luôn 3 tiêu chí trên.
*/

const OnbroadingScreen = () => {
  const theme = useTheme();

  return (
    <View style={[styles.ob_screen, {backgroundColor: theme.colors.background}]}>
      <AppText>OnbroadingScreen</AppText>
    </View>
  )
}

export default OnbroadingScreen