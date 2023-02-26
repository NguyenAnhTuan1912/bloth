import { SafeAreaView } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from './home/HomeScreen';
import BlogsNavigator from './blogs/BlogsNavigator';
import ArchiveScreen from './archive/ArchiveScreen';
import ProfileNavigator from './profile/ProfileNavigator';
import AppHeader from 'share/components/app_header/AppHeader';
import AppText from 'share/components/app_text/AppText';

import BlothTheme from 'styles/theme';
import app_c from 'styles/colors';
import { useTheme } from 'react-native-paper';

const MainTab = createBottomTabNavigator();

export default function MainNavigator() {
  const theme = useTheme();

  return (
    <SafeAreaView style={{flex: 1}}>
      <MainTab.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{
          header: props => <AppHeader {...props} />,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: theme.colors.background,
            borderTopColor: theme.colors.outlineVariant,
            borderTopWidth: 1,
          }
        }}
      >
        {/* Home screen */}
        <MainTab.Screen
          name="HomeScreen"
          options={{
            tabBarLabel: 'Home',
            title: 'Home',
            isTopScreen: true,
            tabBarIcon: ({focused, size, color}) => (
              <Ionicons name={focused ? 'home' : 'home-outline'} color={theme.colors.onBackground} size={size} />
            )
          }}
        >
          { props => <HomeScreen {...props} /> }
        </MainTab.Screen>

        {/* Blogs screen */}
        <MainTab.Screen
          name="BlogsNavigator"
          options={{
            headerShown: false,
            tabBarLabel: 'Blogs',
            tabBarIcon: ({focused, size, color}) => (
              <Ionicons name={focused ? 'newspaper' : 'newspaper-outline'} color={theme.colors.onBackground} size={size} />
            )
          }}
        >
          { props => <BlogsNavigator /> }
        </MainTab.Screen>

        {/* Archive screen */}
        <MainTab.Screen
          name="ArchiveScreen"
          options={{
            isTopScreen: true,
            tabBarLabel: 'Archive',
            title: 'Archive',
            tabBarIcon: ({focused, size, color}) => (
              <Ionicons name={focused ? 'archive' : 'archive-outline'} color={theme.colors.onBackground} size={size} />
            )
          }}
        >
          { props => <ArchiveScreen {...props} /> }
        </MainTab.Screen>

        {/* Profile screen */}
        <MainTab.Screen
          name="ProfileNavigator"
          options={{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused, size, color}) => (
              <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} color={theme.colors.onBackground} size={size} />
            )
          }}
        >
          { props => <ProfileNavigator /> }
        </MainTab.Screen>
      </MainTab.Navigator>
    </SafeAreaView>
  )
}