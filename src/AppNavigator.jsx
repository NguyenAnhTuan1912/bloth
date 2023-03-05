import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigator from 'features/main/MainNavigator';
import AuthenticationNavigator from 'features/authentication/AuthenticationNavigator';
import BlogDetailScreen from 'share/screens/blog_detail/BlogDetailScreen';

const AppTab = createNativeStackNavigator();

/**
 * `AppNavigator` quản lý toàn bộ Navigation của cả App.
 * @returns 
 */
export default function AppNavigator() {
  const isAuthenticated = true;

  return (
    <AppTab.Navigator
      initialRouteName='Authentication'
      tabBar={() => null}
    >
      {
        isAuthenticated
        ? (
          <AppTab.Screen name="Main" options={{ headerShown: false }}>
            { props => <MainNavigator {...props} /> }
          </AppTab.Screen>
          )
        : (
          <AppTab.Screen name="Authentication" options={{ headerShown: false }}>
            { props => <AuthenticationNavigator {...props} /> }
          </AppTab.Screen>
        )
      }
    </AppTab.Navigator>
  )
}