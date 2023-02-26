import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { RouteProp, ParamListBase, NavigationProp } from '@react-navigation/native'

import { Button, useTheme } from 'react-native-paper'

import styles from './HomeScreenStyles'
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
export default function HomeScreen({
  route,
  navigation
}) {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <AppText color={theme.colors.onBackground} >Home screen</AppText>
      <Button onPress={() => navigation.navigate("SignIn")}>
        <AppText>Log out</AppText>
      </Button>
    </SafeAreaView>
  )
}