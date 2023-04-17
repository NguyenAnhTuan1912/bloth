import { View, Text } from 'react-native'
import React from 'react'

import { useRole } from 'share/hooks/useRole';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { IconButton, useTheme } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppHeader from 'share/components/app_header/AppHeader';
import ProfileScreen from './screens/profile/ProfileScreen';
import SettingsScreen from './screens/settings/SettingsScreen';
import BlogDetailScreen from 'share/screens/blog_detail/BlogDetailScreen';
import AppText from 'share/components/app_text/AppText';
import Unauthenticated from 'share/screens/Unauthenticated';

const ProfileStack = createNativeStackNavigator();

export default function ProfileNavigator() {
  const theme = useTheme();
  const { userRole } = useRole();

  return (
    <ProfileStack.Navigator
      initialRouteName='ProfileScreen'
      screenOptions={{
        header: props => <AppHeader {...props} />,
        contentStyle: { backgroundColor: theme.colors.background }
      }}
    >
      {
        userRole === "GUEST"
        ? (
          <ProfileStack.Screen
            name='ProfileScreen'
            options={{
              title: "Profile",
              header: props => (<AppHeader {...props} setRightPart={
                () => <IconButton size={18} onPress={() => props.navigation.navigate("SettingsScreen")} icon={({color}) => <Ionicons name="settings-outline" size={18} color={color} />} />}
              />)
            }}
            component={Unauthenticated}
          />
        )
        : (
            // Profile screen
          <ProfileStack.Screen
            name='ProfileScreen'
            options={{
              title: "Profile",
              header: props => (<AppHeader {...props} setRightPart={
                () => <IconButton size={18} onPress={() => props.navigation.navigate("SettingsScreen")} icon={({color}) => <Ionicons name="settings-outline" size={18} color={color} />} />}
              />)
            }}
            component={ProfileScreen}
          />
        )
      }
      {/* Settings screen */}
      <ProfileStack.Screen
        name='SettingsScreen'
        options={{
          title: "Settings",
        }}
        component={SettingsScreen}
      />

      {/* Blog detail screen */}
      <ProfileStack.Screen
        name='BlogDetailScreen'
        options={{ title: 'Blog Detail' }}
        component={BlogDetailScreen}
      />
    </ProfileStack.Navigator>
  )
}