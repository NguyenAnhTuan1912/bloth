import { View, Text } from 'react-native'
import React from 'react'

import { ActivityIndicator } from 'react-native-paper'

const Loading = () => {
  return (
    <ActivityIndicator animating={true} style={{marginVertical: 50}} />
  )
}

export default Loading