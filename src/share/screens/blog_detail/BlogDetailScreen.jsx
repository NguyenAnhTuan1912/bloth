import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import { Button, useTheme } from 'react-native-paper'

import AppText from 'share/components/app_text/AppText'

import styles from './BlogDetailScreenStyles'

import { NavigationProps } from 'share/types/index.d'

/**
 * Blog detail screen dùng để xem chi tiết một blog nào đó. Đây là chức năng con mà mọi chức năng chính trong app đều có thể dùng.
 * @param {NavigationProps} props - Props của component.
 * @returns 
 */
export default function BlogDetailScreen({
  route,
  navigation
}) {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <AppText color={theme.colors.onBackground}>BlogDetailScreen</AppText>
    </View>
  )
}