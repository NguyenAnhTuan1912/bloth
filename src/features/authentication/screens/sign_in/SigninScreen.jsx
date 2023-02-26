import { View, Text } from 'react-native'
import React from 'react'
import { RouteProp, ParamListBase, NavigationProp } from '@react-navigation/native'

import { Button } from 'react-native-paper'

import styles from './SigninScreenStyles'
import AppText from 'share/components/app_text/AppText'

/**
 * @typedef NavigationProps
 * @property {RouteProp<ParamListBase, string>} route
 * @property {NavigationProp<T>} navigation
 */

/**
 * Đây là screen Sign in
 * @param {NavigationProps} props - Props của component.
 * @returns 
 */
export default function SigninScreen({
  route,
  navigation
}) {
  return (
    <View style={styles.container}>
      <AppText>Sign in screen</AppText>
      <Button onPress={() => navigation.navigate("Main")}>Continue as Guest</Button>
      <Button onPress={() => navigation.navigate("SignUp")}>Go to Sign in</Button>
    </View>
  )
}