import { View, Text } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

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
  
}) {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <AppText color={theme.colors.onBackground}>Home screen</AppText>
      <Button onPress={() => navigation.navigate("Authentication")}>
        <AppText>Log out</AppText>
      </Button>
      <Button onPress={() => navigation.navigate("BlogDetailScreen")}>
        <AppText>Read a random blog</AppText>
      </Button>
    </View>
  )
}