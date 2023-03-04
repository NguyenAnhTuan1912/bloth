import { View, Text } from 'react-native'
import React from 'react'

import { useTheme } from 'react-native-paper';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context';

import MainNavigator from 'features/main/MainNavigator';
import AuthenticationNavigator from 'features/authentication/AuthenticationNavigator';
import SigninScreen from 'features/authentication/screens/sign_in/SigninScreen';
import SignupScreen from 'features/authentication/screens/signup/SignupScreen';
import HomeScreen from 'features/main/home/screens/home/HomeScreen';
import BlogsScreen from 'features/main/blogs/screens/blogs/BlogsScreen';
import ArchiveScreen from 'features/main/archive/screens/archive/ArchiveScreen';
import ProfileScreen from 'features/main/profile/screens/profile/ProfileScreen';
import HomeNavigator from 'features/main/home/HomeNavigator';
import BlogsNavigator from 'features/main/blogs/BlogsNavigator';
import ArchiveNavigator from 'features/main/archive/ArchiveNavigator';
import ProfileNavigator from 'features/main/profile/ProfileNavigator';


const AppTab = createBottomTabNavigator();

/**
 * `AppNavigator` quản lý toàn bộ Navigation của cả App.
 * @returns 
 */
export default function AppNavigator() {
  const isAuthenticated = true;
  const theme = useTheme();

  return (
    <SafeAreaView style={{flex: 1}}>
      <AppTab.Navigator
        initialRouteName='SigninScreen'
        screenOptions={{ tabBarShowLabel: false }}
      >
        {/* Authentication */}
        {/* <AppTab.Screen name="Authentication" options={{ headerShown: false }}>
          { props => <AuthenticationNavigator {...props} /> }
        </AppTab.Screen> */}

        {/* Main */}
        {/* <AppTab.Screen name="Main" options={{ headerShown: false }}>
          { props => <MainNavigator {...props} /> }
        </AppTab.Screen> */}
        
        { isAuthenticated ? 
          (
            <AppTab.Group screenOptions={{ headerShown: false }}>
              {/* Home Navigator */}
              <AppTab.Screen
                name="HomeNavigator"
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({focused, size, color}) => (
                    <Ionicons name={focused ? 'home' : 'home-outline'} color={theme.colors.onBackground} size={size} />
                  )
                }}
              >
                { props => <HomeNavigator {...props} /> }
              </AppTab.Screen>

              {/* Blogs Navigator */}
              <AppTab.Screen
                name="BlogsNavigator"
                options={{
                  tabBarLabel: 'Blogs',
                  tabBarIcon: ({focused, size, color}) => (
                    <Ionicons name={focused ? 'newspaper' : 'newspaper-outline'} color={theme.colors.onBackground} size={size} />
                  )
                }}
              >
                { props => <BlogsNavigator /> }
              </AppTab.Screen>

              {/* Archive Navigator */}
              <AppTab.Screen
                name="ArchiveNavigator"
                options={{
                  tabBarLabel: 'Archive',
                  tabBarIcon: ({focused, size, color}) => (
                    <Ionicons name={focused ? 'archive' : 'archive-outline'} color={theme.colors.onBackground} size={size} />
                  )
                }}
              >
                { props => <ArchiveNavigator {...props} /> }
              </AppTab.Screen>

              {/* Profile Navigator */}
              <AppTab.Screen
                name="ProfileNavigator"
                options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: ({focused, size, color}) => (
                    <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} color={theme.colors.onBackground} size={size} />
                  )
                }}
              >
                { props => <ProfileNavigator /> }
              </AppTab.Screen>
            </AppTab.Group>
          )
          :
          (
            <AppTab.Group screenOptions={{ headerShown: false }}>
              <AppTab.Screen name="SigninScreen">{props => <SigninScreen {...props} />}</AppTab.Screen>
              <AppTab.Screen name="SignupScreen">{props => <SignupScreen {...props} />}</AppTab.Screen>
            </AppTab.Group>
          )
        }
      </AppTab.Navigator>
    </SafeAreaView>
  )
}