import { View, ScrollView, FlatList, LayoutAnimation, Platform, UIManager } from 'react-native'
import React from 'react'
import { RouteProp, ParamListBase, NavigationProp } from '@react-navigation/native'

import { useTheme } from 'react-native-paper'

import withState from 'share/hocs/withState'

import AppText from 'share/components/app_text/AppText'
import TypeScrollView from 'share/components/type_scroll_view/TypeScrollView'
import BlogCardSkeleton from 'share/components/blog_card/BlogCardSkeleton'

import styles from './HomeScreenStyles'
import app_sp from 'styles/spacing'

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
  const [blogType, setBlogType] = React.useState("all");
  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.background }}
      stickyHeaderIndices={[2]}
    >
      <AppText font = 'h1' style= {[app_sp.mt_12, app_sp.ph_18]}>Reading is great and sharing is too. </AppText>
      <View style={{ height: 25 }}></View>
      <TypeScrollView
        types="all;recommended"
        buttonStyle="underline"
        callBack={setBlogType}
        scrollStyle={{borderBottomColor: theme.colors.outline, borderBottomWidth: .5}}
        containerStyle={[app_sp.ph_18, { backgroundColor: theme.colors.background }]}
      ></TypeScrollView>
      <View style={app_sp.ph_18}>
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
      </View>
    </ScrollView>
  )
}