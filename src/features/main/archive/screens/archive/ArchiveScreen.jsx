import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { RouteProp, ParamListBase, NavigationProp } from '@react-navigation/native'

import { Button, useTheme } from 'react-native-paper'

import AppText from 'share/components/app_text/AppText'

import styles from '../../ArchiveScreenStyles'

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
export default function ArchiveScreen({
  route,
  navigation
}) {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <AppText color={theme.colors.onBackground}>Archive</AppText>
    </View>
  )
}