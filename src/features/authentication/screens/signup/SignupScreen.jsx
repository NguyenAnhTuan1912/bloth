import { View, Text } from 'react-native'
import React from 'react'
import { RouteProp, ParamListBase, NavigationProp } from '@react-navigation/native'

import styles from './SignupScreenStyles'
import { Button } from 'react-native-paper'

/**
 * @typedef NavigationProps
 * @property {RouteProp<ParamListBase, string>} route
 * @property {NavigationProp<T>} navigation
 */

/**
 * Đây là screen Sign up
 * @param {NavigationProps} props - Props của component.
 * @returns 
 */
export default function SignupScreen({
  route,
  navigation
}) {
  return (
    <View style={styles.container}>
      <Text>SignupScreen</Text>
      <Button onPress={() => navigation.navigate("SignIn")}>Go to Sign in</Button>
    </View>
  )
}