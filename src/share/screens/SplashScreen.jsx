import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AppText from 'share/components/app_text/AppText'
import { useTheme } from 'react-native-paper'

export default function SplashScreen() {
  const theme = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <AppText font="h2">Bloth</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  }
})