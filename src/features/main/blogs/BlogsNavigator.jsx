import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from 'react-native-paper';

import AppHeader from 'share/components/app_header/AppHeader';
import BlogsScreen from './screens/blogs/BlogsScreen';
import BlogDetailScreen from 'share/screens/blog_detail/BlogDetailScreen';
import { Button } from 'react-native-paper';

const BlogsStack = createNativeStackNavigator();

export default function BlogsNavigator() {
  const theme = useTheme();

  return (
    <BlogsStack.Navigator
      initialRouteName='BlogsScreen'
      screenOptions={{
        header: props => <AppHeader {...props} />,
        contentStyle: { backgroundColor: theme.colors.background }
      }}
    >
      {/* Blogs screen */}
      <BlogsStack.Screen
        name='BlogsScreen'
        options={{
          title: 'Blog',
          header: props => <AppHeader {...props} setRightPart={() => <Button mode="text" onPress={() => {}}>Create Blog</Button> } />
        }}
        component={BlogsScreen}
      />

      {/* Blog detail screen */}
      <BlogsStack.Screen
        name='BlogDetailScreen'
        options={{ title: 'Blog Detail' }}
        component={BlogDetailScreen}
      />
    </BlogsStack.Navigator>
  )
}