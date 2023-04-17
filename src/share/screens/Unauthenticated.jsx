import { View, Text } from 'react-native'
import React from 'react'

import { useRole } from 'share/hooks/useRole'

import { useNavigation } from '@react-navigation/native'
import { Button, useTheme } from 'react-native-paper'

import AppText from 'share/components/app_text/AppText'

const Unauthenticated = () => {
  const theme = useTheme();
  const { dispatchUserRoleUpdate } = useRole();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background
      }}
    >
      <AppText>You're not sign in. Please sign in to continute!</AppText>
      <Button
        onPress={() => dispatchUserRoleUpdate("")}
      >
        Sign in
      </Button>
    </View>
  )
}

export default Unauthenticated