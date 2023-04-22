import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useLoading } from 'share/hooks/useManifoldSlice'

import { ActivityIndicator } from 'react-native-paper'

/**
 * Component này là component loading nằm ở global. Dùng
 * component này với custom redux hook `useLoading`. Khi muốn
 * người dùng phải đợi để thực hiện một hành động nào đó như là
 * Sign in, sign up hoặc là load một thông báo nào đó thì dùng cái này.
 * @returns 
 */
const GlobalLoading = () => {
  const { isLoading } = useLoading();

  return (
    isLoading && (
      <View style={styles.loading}>
        <ActivityIndicator animating={true} />
      </View>
    )
  )
}

export default GlobalLoading

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(38, 38, 38, .8)'
  }
})