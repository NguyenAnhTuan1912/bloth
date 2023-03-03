import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer, RouteProp, ParamListBase, NavigationProp } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'

import SigninScreen from './screens/sign_in/SigninScreen'
import SignupScreen from './screens/signup/SignupScreen'
import AppHeader from 'share/components/app_header/AppHeader'

import { NavigationProps, ScreenProps } from 'share/types/index.d'

const AuthenticationTab = createBottomTabNavigator();

/**
 * `AuthenticationNavigator` là navigator quản lý các chức năng liên quan tới xác nhận người dùng.
 * Nó nhận vào một object có 2 thuộc tính là route và navigation. Object này được truyền từ App (Root).
 * @param {NavigationProps} props Prop của component.
 * @returns 
 */
export default function AuthenticationNavigator({
  route,
  navigation
}) {

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer independent>
        <AuthenticationTab.Navigator
          initialRouteName='SigninScreen'
          tabBar={() => null}
          screenOptions={{
            tabBarShowLabel: false,
            headerShown: false
          }}
        >
          <AuthenticationTab.Screen
            name='SigninScreen'
          >
            { props => <SigninScreen {...props} appNavigation={navigation} /> }
          </AuthenticationTab.Screen>

          <AuthenticationTab.Screen
            name='SignupScreen'
          >
            { props => <SignupScreen {...props} appNavigation={navigation} /> }
          </AuthenticationTab.Screen>
        </AuthenticationTab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}