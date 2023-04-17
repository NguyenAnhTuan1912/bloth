import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {
  updateUserDetails,
  USER_ROLES
} from 'app_redux/user/userSlice';

import JWTUlitity from 'utilities/jwt';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useTheme } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { useRole } from 'share/hooks/useRole';

import * as SplashScreen from 'expo-splash-screen';
import MainNavigator from 'features/main/MainNavigator';
import AuthenticationNavigator from 'features/authentication/AuthenticationNavigator';

const AppStack = createNativeStackNavigator();

/**
 * `AppNavigator` quản lý toàn bộ Navigation của cả App.
 * @returns 
 */
export default function AppNavigator() {
  const dispatch = useDispatch();
  const { userRole, dispatchUserRoleUpdate } = useRole();
  const theme = useTheme();

  React.useEffect(() => {
    async function prepareUser() {
      let idToken = await AsyncStorage.getItem("id-token");
      console.log("TOKEN: ", idToken);
      console.log("TOKEN IS EXPIRED: ", JWTUlitity.isTokenExpired(idToken));
      if(!JWTUlitity.isTokenExpired(idToken)) {
        let user = JWTUlitity.decodeToken(idToken);
        let role = user.activedEmail ? USER_ROLES.ACTIVED_ACCOUNT : USER_ROLES.NON_ACTIVED_ACCOUNT;
        dispatch(updateUserDetails(user));
        dispatchUserRoleUpdate(role);
        console.log("USER ROLE IN useEffect: ", role);
        console.log("USER INFO IN useEffect: ", user);
      } else AsyncStorage.removeItem("id-token");
      await SplashScreen.hideAsync();
    }
    prepareUser();
  }, []);

  console.log("USER ROLE: ", userRole);

  return (
    <AppStack.Navigator
      initialRouteName='Authentication'
      tabBar={() => null}
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.background }
      }}
    >
      { userRole === ""
        ? (
          // Authentication
          <AppStack.Screen 
            name="Authentication" 
            options={{ headerShown: false }}
            component={AuthenticationNavigator}
          />
        )
        : (
          // Main
          <AppStack.Screen 
            name="Main" 
            options={{ headerShown: false }}
            component={MainNavigator}
          />
        )
      }
    </AppStack.Navigator>
  )
}