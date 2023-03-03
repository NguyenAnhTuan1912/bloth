import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import { Button, useTheme } from 'react-native-paper'

import styles from './HomeScreenStyles'
import AppText from 'share/components/app_text/AppText'

import { NavigationProps, ScreenProps } from 'share/types/index.d'

/**
 * Đây là screen Sign in
 * @param {NavigationProps & ScreenProps} props - Props của component.
 * @returns 
 */
export default function HomeScreen({
  route,
  navigation,
  appNavigation
}) {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <AppText color={theme.colors.onBackground}>Home screen</AppText>
      <Button onPress={() => appNavigation.navigate("Authentication")}>
        <AppText>Log out</AppText>
      </Button>
    </SafeAreaView>
  )
}