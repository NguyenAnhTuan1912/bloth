
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from 'react-native-paper';

import { useRole } from 'share/hooks/useUserSlice';

import ArchiveScreen from './screens/archive/ArchiveScreen';
import AppHeader from 'share/components/app_header/AppHeader';

import UnauthenticatedScreen from 'share/screens/unauthenticated/UnauthenticatedScreen';
import BlogDetailScreen from 'share/screens/blog_detail/BlogDetailScreen';

import { NavigationProps, ScreenProps } from 'share/types/index.d';

const ArchiveStack = createNativeStackNavigator();

/**
 * `ArchiveNavigator` quản lý Home. Nó nhận và một object bao gồm 3 thuộc tính.
 * route, navigation là các thuộc tính của Parent Navigator, còn appNavigation là thuộc tính navigation của App.
 * @param {NavigationProps & ScreenProps} props Props của component.
 * @returns 
 */
export default function ArchiveNavigator() {
  const theme = useTheme();
  const { userRole } = useRole();

  return (
    <ArchiveStack.Navigator 
      initialRouteName='HomeScreen' 
      screenOptions={{ 
        header: props => <AppHeader {...props} />,
        contentStyle: { backgroundColor: theme.colors.background }
      }}
    >
      {
        userRole === "GUEST"
        ? (
          <ArchiveStack.Screen
            name="ArchieveScreen"
            options={{ title: 'Archive' }}
            component={UnauthenticatedScreen}
          />
        )
        : (
          <>
            <ArchiveStack.Screen 
              name="ArchieveScreen" 
              options={{ title: 'Archive' }}
              component={ArchiveScreen}  
            />

            <ArchiveStack.Screen
              name="BlogDetailScreen"
              options={{ title: 'Blog Detail' }}
              component={BlogDetailScreen}
            />
          </>
        )
      }
    </ArchiveStack.Navigator>
  )
}