import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import * as SplashScreen from 'expo-splash-screen';

import AsyncStorageUltility from 'utilities/async_store';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useBriefBlogs } from 'share/hooks/useBlogSlice';
import { useRole, useUser } from 'share/hooks/useUserSlice';

import { ThemeContext } from 'share/contexts/ThemeContext';

import { Button, useTheme, IconButton, List, RadioButton } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppText from 'share/components/app_text/AppText'

import styles from './SettingsScreenStyles'
import app_sp from 'styles/spacing';

import { NavigationProps } from 'share/types/index.d';

/**
 * Đây là screen Sign in
 * @param {NavigationProps} props - Props của component.
 * @returns 
 */
export default function SettingsScreen() {
  const theme = useTheme();
  const { currentTheme, setCurrentTheme } = React.useContext(ThemeContext);
  const { userRole, userRoleDispatcher } = useRole();
  const { user, userDispatcher } = useUser();
  const { blogsDispatcher } = useBriefBlogs();

  const typeOfTheme = {
    light: 'light',
    dark: 'dark'
  }

  const getHandleToggleTheme = theme => {
    return function() {
      setCurrentTheme(theme)
    }
  }

  const resetData = () => {
    userRoleDispatcher.updateUserRole("");
    userDispatcher.updateUserDetails({});
    blogsDispatcher.clearAll();
  }

  const handleSignOut = async () => {
    if(userRole === "GUEST") {
      resetData();
    }
    else {
      const tokens = await Promise.all([
        AsyncStorageUltility.getValue(AsyncStorageUltility.ID_TOKEN_KEY),
        AsyncStorageUltility.getValue(AsyncStorageUltility.ACCESS_TOKEN_KEY),
        AsyncStorageUltility.getValue(AsyncStorageUltility.REFRESH_TOKEN_KEY)
      ]);
      console.log("TOKENS: ", tokens);
      const removeTokensResult = await Promise.all([
        AsyncStorage.removeItem(AsyncStorageUltility.ID_TOKEN_KEY),
        AsyncStorage.removeItem(AsyncStorageUltility.ACCESS_TOKEN_KEY),
        AsyncStorage.removeItem(AsyncStorageUltility.REFRESH_TOKEN_KEY)
      ]); 
      resetData();
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <List.Accordion title="Theme">
        <List.Item
          onPress={getHandleToggleTheme(typeOfTheme.light)}
          title="Light"
          right={({ color }) => (
            currentTheme === typeOfTheme.light ? <Ionicons size={20} color={color} name="checkmark-outline" /> : null
          )}
        />
        <List.Item
          onPress={getHandleToggleTheme(typeOfTheme.dark)}
          title="Dark"
          right={({ color }) => (
            currentTheme === typeOfTheme.dark ? <Ionicons size={20} color={color} name="checkmark-outline" /> : null
          )}
        />
      </List.Accordion>

      <Button
        mode="contained"
        onPress={() => {}}
        style={app_sp.mb_12}
      >
        Change password
      </Button>

      <Button
        mode="contained-tonal"
        onPress={handleSignOut}
      >
        Sign out
      </Button>
    </ScrollView>
  )
}