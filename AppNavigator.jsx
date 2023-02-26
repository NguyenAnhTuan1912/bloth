import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigator from 'features/main/MainNavigator';
import SigninScreen from 'features/authentication/screens/sign_in/SigninScreen';
import SignupScreen from 'features/authentication/screens/signup/SignupScreen';
import HomeScreen from 'features/main/home/HomeScreen';
import BlogsNavigator from 'features/main/blogs/BlogsNavigator';
import ArchiveScreen from 'features/main/archive/ArchiveScreen';
import ProfileNavigator from 'features/main/profile/ProfileNavigator';

const AppTab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <AppTab.Navigator
      initialRouteName='SignIn'
      tabBar={() => null}
    >
      {/* Authentication */}
      <AppTab.Group screenOptions={{ headerShown: false }}>
        <AppTab.Screen name="SignIn">
          { props => <SigninScreen {...props} /> }
        </AppTab.Screen>
        <AppTab.Screen name="SignUp">
          { props => <SignupScreen {...props} /> }
        </AppTab.Screen>
      </AppTab.Group>

      {/* Main */}
      {/* <AppTab.Group>
        <AppTab.Screen name="Home">
          { props => <HomeScreen {...props} /> }
        </AppTab.Screen>
        <AppTab.Screen name="BlogsNavigator" options={{ headerShown: false }}>
          { props => <BlogsNavigator /> }
        </AppTab.Screen>
        <AppTab.Screen name="Archive">
          { props => <ArchiveScreen {...props} /> }
        </AppTab.Screen>
        <AppTab.Screen name="ProfileNavigator" options={{ headerShown: false }}>
          { props => <ProfileNavigator /> }
        </AppTab.Screen>
      </AppTab.Group> */}
      <AppTab.Screen name="Main" options={{ headerShown: false }}>
        { props => <MainNavigator /> }
      </AppTab.Screen>
    </AppTab.Navigator>
  )
}