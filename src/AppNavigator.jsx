import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {
  updateUserDetails,
  USER_ROLES
} from 'app_redux/user/userSlice';

import JWTUlitity from 'utilities/jwt';
import AsyncStorageUltility from 'utilities/async_store';
import { ASYNC_STORAGE_KEYS } from 'utilities/async_storage_keys';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useTheme } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { useRole, useUser } from 'share/hooks/useUserSlice';

import * as SplashScreen from 'expo-splash-screen';
import MainNavigator from 'features/main/MainNavigator';
import AuthenticationNavigator from 'features/authentication/AuthenticationNavigator';
import OnbroadingScreen from 'share/screens/onbroading/OnbroadingScreen';

const AppStack = createNativeStackNavigator();

/**
 * `AppNavigator` quản lý toàn bộ Navigation của cả App.
 * @returns 
 */
export default function AppNavigator() {
  const dispatch = useDispatch();
  const { userRole, userRoleDispatcher } = useRole();
  const { user, userDispatcher } = useUser();
  const theme = useTheme();

  const [hasFirstLaunch, setHasFirstLaunch] = React.useState(false);

  React.useEffect(() => {
    async function prepareUser() {
      try {
        if(userRole === "GUEST") {
          let hasFirstLaunch = await AsyncStorageUltility.hasFirstLaunch();
          setHasFirstLaunch(JSON.parse(hasFirstLaunch));
          return;
        }

        let idToken = await AsyncStorageUltility.getValue(ASYNC_STORAGE_KEYS.ID_TOKEN_KEY);
        console.log("ID TOKEN: ", idToken);
        console.log("ACTUAL FIRST LAUNCH: ", await AsyncStorage.getAllKeys());
        if(!idToken) return;
        if(!JWTUlitity.isTokenExpired(idToken)) {
          let user = JWTUlitity.decodeToken(idToken);
          let hasFirstLaunch = await AsyncStorageUltility.hasFirstLaunch(user._id);

          let role = user.activedEmail ? USER_ROLES.ACTIVED_ACCOUNT : USER_ROLES.NON_ACTIVED_ACCOUNT;

          userDispatcher.updateUserDetails(user);
          userRoleDispatcher.updateUserRole(role);
          setHasFirstLaunch(JSON.parse(hasFirstLaunch));
        } else {
          await AsyncStorageUltility.remove(ASYNC_STORAGE_KEYS.ID_TOKEN_KEY);
          userRoleDispatcher.updateUserRole("");
        }
      } catch (error) {
        console.error(error.message);
      }
    }

    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }

    prepareUser();
    hideSplashScreen();
  }, [userRole]);

  console.log("USER ROLE: ", userRole);
  console.log("ACTUAL FIRST LAUNCH: ", hasFirstLaunch);

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
        : hasFirstLaunch ? (
          <AppStack.Screen 
            name="Onbroading" 
            options={{ headerShown: false, animation: 'fade_from_bottom' }}
            component={OnbroadingScreen}
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