import { View, Text } from 'react-native'
import React from 'react'
import { RouteProp, ParamListBase, NavigationProp } from '@react-navigation/native'

import styles from './SignupScreenStyles'
import { Button } from 'react-native-paper'

import { NavigationProps, ScreenProps } from 'share/types/index.d'

/**
 * Đây là screen Sign up
 * @param {NavigationProps & ScreenProps} props - Props của component.
 * @returns 
 */
export default function SignupScreen({
  route,
  navigation,
  appNavigation
}) {
  return (
    <View style={styles.container}>
      <Text>SignupScreen</Text>
      <Button onPress={() => navigation.navigate("SigninScreen")}>Go to Sign in</Button>
    </View>
  )
}