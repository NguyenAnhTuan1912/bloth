import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AppHeader from 'share/components/app_header/AppHeader';
import BlogsScreen from './screens/blogs/BlogsScreen';
import BlogDetailScreen from 'share/screens/blog_detail/BlogDetailScreen';
import { Button } from 'react-native-paper';

const BlogsStack = createNativeStackNavigator();

export default function BlogsNavigator() {
  return (
    <NavigationContainer independent>
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
            title: 'Blog',
            header: props => <AppHeader {...props} setRightPart={() => <Button mode="text" onPress={() => {}}>Create Blog</Button> } />
          }}
        >
          { props => <BlogsScreen {...props} />}
        </BlogsStack.Screen>

        {/* Blog detail screen */}
        <BlogsStack.Screen
          name='BlogDetailScreen'
          options={{ title: 'Blog Detail' }}
        >
          { props => <BlogDetailScreen {...props} />}
        </BlogsStack.Screen>
      </BlogsStack.Navigator>
    </NavigationContainer>
  )
}