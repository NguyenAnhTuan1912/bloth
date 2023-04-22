import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useNotification } from 'share/hooks/useManifoldSlice'

import { Snackbar, useTheme } from 'react-native-paper'
import AppText from '../app_text/AppText'

import app_sp from 'styles/spacing'

const Nofitication = () => {
  const { notification, notificationDispatcher } = useNotification();
  const [visible, setVisible] = React.useState(notification.visible);
  const theme = useTheme();

  const onDismissSnackBar = () => {
    notificationDispatcher.hide()
  }

  return (
    <Snackbar
      visible={notification.visible}
      duration={notification.duration}
      style={{backgroundColor: theme.colors.onBackground}}
      onDismiss={onDismissSnackBar}
      action={{
        label: "Ok",
        onPress: e => {
          notificationDispatcher.hide()
        }
      }}
    >
      <View style={[styles[notification.type], app_sp.ps_12]}>
        <AppText color={theme.colors.background}>{notification.title}: {notification.message}</AppText>
      </View>
    </Snackbar>
  )
}

export default Nofitication

const defaultStyle = {
  borderLeftWidth: 8
}

const styles = StyleSheet.create({
  info: {
    borderLeftColor: "blue",
    ...defaultStyle
  },

  error: {
    borderLeftColor: "red",
    ...defaultStyle
  },

  success: {
    borderLeftColor: "green",
    ...defaultStyle
  },

  warning: {
    borderLeftColor: "yellow",
    ...defaultStyle
  },
})