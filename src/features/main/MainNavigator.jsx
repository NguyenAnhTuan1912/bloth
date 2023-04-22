import { View, TouchableOpacity, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

import { useTheme } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeNavigator from './home/HomeNavigator';
import BlogsNavigator from './blogs/BlogsNavigator';
import ArchiveNavigator from './archive/ArchiveNavigator';
import ProfileNavigator from './profile/ProfileNavigator';

import { NavigationProps, ScreenProps } from 'share/types/index.d';

const MainTab = createBottomTabNavigator();

/**
 * `MainNavigator` là navigator quản lý các chức năng chính của app. Nó nhận vào một object có 2 thuộc tính là
 * route và navigation. Object này được truyền từ App (Root).
 * @param {NavigationProps} props Props của component.
 * @returns 
 */
export default function MainNavigator() {
  const theme = useTheme();

  return (
    <SafeAreaView style={{flex: 1}}>
      <MainTab.Navigator
        initialRouteName='HomeNavigator'
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: theme.colors.background,
            borderTopColor: theme.colors.outlineVariant,
            borderTopWidth: 1,
          }
        }}
        sceneContainerStyle={{backgroundColor: theme.colors.background}}
      >
        {/* Home Navigator */}
        <MainTab.Screen
          name="HomeNavigator"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused, size, color}) => (
              <Ionicons name={focused ? 'home' : 'home-outline'} color={theme.colors.onBackground} size={size} />
            )
          }}
          component={HomeNavigator}
        />

        {/* Blogs Navigator */}
        <MainTab.Screen
          name="BlogsNavigator"
          options={{
            tabBarLabel: 'Blogs',
            tabBarIcon: ({focused, size, color}) => (
              <Ionicons name={focused ? 'newspaper' : 'newspaper-outline'} color={theme.colors.onBackground} size={size} />
            )
          }}
          component={BlogsNavigator}
        />

        {/* Archive Navigator */}
        <MainTab.Screen
          name="ArchiveNavigator"
          options={{
            tabBarLabel: 'Archive',
            tabBarIcon: ({focused, size, color}) => (
              <Ionicons name={focused ? 'archive' : 'archive-outline'} color={theme.colors.onBackground} size={size} />
            )
          }}
          component={ArchiveNavigator}
        />

        {/* Profile Navigator */}
        <MainTab.Screen
          name="ProfileNavigator"
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused, size, color}) => (
              <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} color={theme.colors.onBackground} size={size} />
            )
          }}
          component={ProfileNavigator}
        />
      </MainTab.Navigator>
    </SafeAreaView>
  )
}