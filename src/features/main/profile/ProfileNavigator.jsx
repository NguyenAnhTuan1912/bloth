import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ProfileScreen from './screens/profile/ProfileScreen';
import SettingsScreen from './screens/settings/SettingsScreen';
import AppHeader from 'share/components/app_header/AppHeader';

const ProfileStack = createNativeStackNavigator();

export default function ProfileNavigator() {
  return (
    <NavigationContainer independent>
      <ProfileStack.Navigator
        initialRouteName='ProfileScreen'
        screenOptions={{
          header: props => <AppHeader {...props} />
        }}
      >
        {/* Profile screen */}
        <ProfileStack.Screen
          name='ProfileScreen'
          options={{
            isTopScreen: true
          }}
        >
          { props => <ProfileScreen {...props} />}
        </ProfileStack.Screen>

        {/* Settings screen */}
        <ProfileStack.Screen
          name='SettingsScreen'
        >
          { props => <SettingsScreen {...props} />}
        </ProfileStack.Screen>
      </ProfileStack.Navigator>
    </NavigationContainer>
  )
}