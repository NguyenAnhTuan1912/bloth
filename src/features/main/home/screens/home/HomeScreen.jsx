import { View, ScrollView, FlatList, LayoutAnimation, Platform, UIManager } from 'react-native'
import React from 'react'
import { RouteProp, ParamListBase, NavigationProp } from '@react-navigation/native'

import { Button, IconButton, useTheme } from 'react-native-paper'

import { useBriefBlogs } from 'share/hooks/useBlogSlice'

import Ionicons from 'react-native-vector-icons/Ionicons';

import AppText from 'share/components/app_text/AppText'
import BlogCard from 'share/components/blog_card/BlogCard'
import Loading from 'share/components/loading/Loading'

import styles from './HomeScreenStyles'
import app_sp from 'styles/spacing'

import { BLOG_CARD_FIELDS } from 'utilities/constants'

/**
 * @typedef BlogListProps
 * @property {any[]} data
 * @property {React.Dispatch<React.SetStateAction<any[]>>} setData
 */

/**
 * @typedef NavigationProps
 * @property {RouteProp<ParamListBase, string>} route
 * @property {NavigationProp<T>} navigation
 */

if(Platform.OS === "android") {
  if(UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

/**
 * Đây là screen Sign in
 * @param {NavigationProps} props - Props của component.
 * @returns 
 */
export default function HomeScreen({
  route,
  navigation
}) {
  const theme = useTheme();
  const { blogs, blogsDispatcher } = useBriefBlogs("newest");

  React.useEffect(() => {
    blogsDispatcher.fetchBriefBlogs(BLOG_CARD_FIELDS);
  }, []);

  // console.log("BLOG IN HOME: ", blogs);

  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.background }}
    >
      <AppText font = 'h1' style= {[app_sp.mt_12, app_sp.ph_18]}>Reading is great and sharing is too. </AppText>
      <View style={{ height: 25 }}></View>
      <View style={[app_sp.ph_18, {flexDirection: 'row', alignItems: "center", justifyContent: "space-between"}]}>
        <AppText font="h3">Newest</AppText>
        <AppText font="body2" toScreen={{screenName: "BlogsNavigator"}}>View more</AppText>
      </View>
      <View>
        {
          blogs ? (
            blogs.data.map(blog => <BlogCard key={blog._id} {...blog} />)
          ) :
          (
            <Loading />
          )
        }
      </View>
    </ScrollView>
  )
}