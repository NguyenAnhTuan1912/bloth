import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MainNavigator from 'features/main/MainNavigator';
import AuthenticationNavigator from 'features/authentication/AuthenticationNavigator';

const AppTab = createBottomTabNavigator();

/**
 * `AppNavigator` quản lý toàn bộ Navigation của cả App.
 * @returns 
 */
export default function AppNavigator() {
  return (
    <AppTab.Navigator
      initialRouteName='Authentication'
      tabBar={() => null}
    >
      {/* Authentication */}
      <AppTab.Screen name="Authentication" options={{ headerShown: false }}>
        { props => <AuthenticationNavigator {...props} /> }
      </AppTab.Screen>

      {/* Main */}
      <AppTab.Screen name="Main" options={{ headerShown: false }}>
        { props => <MainNavigator {...props} /> }
      </AppTab.Screen>
    </AppTab.Navigator>
  )
}