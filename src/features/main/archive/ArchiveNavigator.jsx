
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ArchiveScreen from './screens/archive/ArchiveScreen';
import AppHeader from 'share/components/app_header/AppHeader';

import { NavigationProps, ScreenProps } from 'share/types/index.d';
import BlogDetailScreen from 'share/screens/blog_detail/BlogDetailScreen';

const ArchiveStack = createNativeStackNavigator();

/**
 * `ArchiveNavigator` quản lý Home. Nó nhận và một object bao gồm 3 thuộc tính.
 * route, navigation là các thuộc tính của Parent Navigator, còn appNavigation là thuộc tính navigation của App.
 * @param {NavigationProps & ScreenProps} props Props của component.
 * @returns 
 */
export default function ArchiveNavigator({
  route,
  navigation,
  appNavigation
}) {
  return (
    <NavigationContainer independent>
      <ArchiveStack.Navigator initialRouteName='HomeScreen' screenOptions={{ header: props => <AppHeader {...props} />}}>
        <ArchiveStack.Screen name="ArchieveScreen" options={{ title: 'Archive' }}>
          {props => <ArchiveScreen {...props} appNavigation={appNavigation} />}
        </ArchiveStack.Screen>

        <ArchiveStack.Screen name="BlogDetailScreen" options={{ title: 'Blog Detail' }}>
          {props => <BlogDetailScreen {...props} appNavigation={appNavigation} />}
        </ArchiveStack.Screen>
      </ArchiveStack.Navigator>
    </NavigationContainer>
  )
}