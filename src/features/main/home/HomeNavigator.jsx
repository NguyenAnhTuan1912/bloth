import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from 'react-native-paper';

import HomeScreen from './screens/home/HomeScreen';
import BlogDetailScreen from 'share/screens/blog_detail/BlogDetailScreen';
import AppHeader from 'share/components/app_header/AppHeader';

import { NavigationProps, ScreenProps } from 'share/types/index.d';

const HomeStack = createNativeStackNavigator();

/**
 * `HomeNavigator` quản lý Home. Nó nhận và một object bao gồm 3 thuộc tính.
 * route, navigation là các thuộc tính của Parent Navigator, còn appNavigation là thuộc tính navigation của App.
 * @param {NavigationProps & ScreenProps} props Props của component.
 * @returns 
 */
export default function HomeNavigator({
  route,
  navigation,
  appNavigation
}) {
  const theme = useTheme();
  console.log("HOME NAVIGATOR RENDER");
  return (
    <HomeStack.Navigator 
      initialRouteName='HomeScreen' 
      screenOptions={{ 
        header: props => <AppHeader {...props} />,
        contentStyle: { backgroundColor: theme.colors.background }
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        options={{ title: 'Home' }}
        component={HomeScreen}
      />

      <HomeStack.Screen 
        name="BlogDetailScreen"
        options={{ title: 'Blog Detail' }}
        component={BlogDetailScreen}
      />
    </HomeStack.Navigator>
  )
}