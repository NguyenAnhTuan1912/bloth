import { View, Text } from 'react-native'
import React from 'react'

import { Button } from 'react-native-paper'

import styles from './SigninScreenStyles'
import AppText from 'share/components/app_text/AppText'

import { NavigationProps, ScreenProps } from 'share/types/index.d'

/**
 * Đây là screen Sign in
 * @param {NavigationProps & ScreenProps} props - Props của component.
 * @returns 
 */
export default function SigninScreen({
  route,
  navigation,
  appNavigation
}) {
  return (
    <View style={styles.container}>
      <AppText>Sign in screen</AppText>
      <Button onPress={() => appNavigation.navigate("Main")}>Continue as Guest</Button>
      <Button onPress={() => navigation.navigate("SignupScreen")}>Go to Sign in</Button>
    </View>
  )
}