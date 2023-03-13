import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { IconButton } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppHeader from 'share/components/app_header/AppHeader';
import ProfileScreen from './screens/profile/ProfileScreen';
import SettingsScreen from './screens/settings/SettingsScreen';
import BlogDetailScreen from 'share/screens/blog_detail/BlogDetailScreen';

const ProfileStack = createNativeStackNavigator();

export default function ProfileNavigator() {
  return (
    <NavigationContainer independent>
      <ProfileStack.Navigator
        initialRouteName='ProfileScreen'
        screenOptions={{
          header: props => <AppHeader {...props} />
        }}
      >
        {/* Profile screen */}
        <ProfileStack.Screen
          name='ProfileScreen'
          options={{
            title: "Profile",
            header: props => (<AppHeader {...props} setRightPart={
              () => <IconButton size={18} onPress={() => props.navigation.navigate("SettingsScreen")} icon={({color}) => <Ionicons name="settings-outline" size={18} color={color} />} />}
            />)
          }}
        >
          { props => <ProfileScreen {...props} />}
        </ProfileStack.Screen>

        {/* Settings screen */}
        <ProfileStack.Screen
          name='SettingsScreen'
          options={{
            title: "Settings",
          }}
        >
          { props => <SettingsScreen {...props} />}
        </ProfileStack.Screen>

        {/* Blog detail screen */}
        <ProfileStack.Screen
          name='BlogDetailScreen'
          options={{ title: 'Blog Detail' }}
        >
          { props => <BlogDetailScreen {...props} />}
        </ProfileStack.Screen>
      </ProfileStack.Navigator>
    </NavigationContainer>
  )
}