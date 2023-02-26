import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BlogsScreen from './screens/blogs/BlogsScreen';
import BlogDetailScreen from './screens/blog_detail/BlogDetailScreen';
import AppHeader from 'share/components/app_header/AppHeader';

const BlogsStack = createNativeStackNavigator();

export default function BlogsNavigator() {
  return (
    <BlogsStack.Navigator
      initialRouteName='BlogsScreen'
      screenOptions={{
        header: props => <AppHeader {...props} />
      }}
    >
      {/* Blogs screen */}
      <BlogsStack.Screen
        name='BlogsScreen'
        options={{
          isTopScreen: true
        }}
      >
        { props => <BlogsScreen {...props} />}
      </BlogsStack.Screen>

      {/* Blog detail screen */}
      <BlogsStack.Screen
        name='BlogDetailScreen'
      >
        { props => <BlogDetailScreen {...props} />}
      </BlogsStack.Screen>
    </BlogsStack.Navigator>
  )
}