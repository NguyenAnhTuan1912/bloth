import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { RouteProp, ParamListBase, NavigationProp } from '@react-navigation/native'

import { Button, useTheme } from 'react-native-paper'

import withState from 'share/hocs/withState'

import AppText from 'share/components/app_text/AppText'

import styles from './BlogsScreenStyles'
import AppTabSlider from 'share/components/app_tab_slider/AppTabSlider'

/**
 * @typedef BlogListProps
 * @property {any[]} data
 * @property {React.Dispatch<React.SetStateAction<any[]>>} setData
 */

/**
 * @param {BlogListProps} props Props của component.
 * @return `ScrollView` có chứa các BlogCard
 */
const BlogListWithOutState = ({
  data = [],
  setData
}) => {
  return (
    <View style={{width: '100%', height: 1000, backgroundColor: 'red'}}>
      {data.map(blog => (
        <AppText key={blog}>{blog}</AppText>
      ))}
    </View>
  );
}

/**
 * @typedef NavigationProps
 * @property {RouteProp<ParamListBase, string>} route
 * @property {NavigationProp<T>} navigation
 */

/**
 * Đây là screen Sign in
 * @param {NavigationProps} props - Props của component.
 * @returns 
 */
export default function BlogsScreen({
  route,
  navigation
}) {
  const theme = useTheme();

  const BlogSlides = React.useMemo(() => [
    {
      name: "technology",
      RenderComponent: withState(BlogListWithOutState)
    },
    {
      name: "life",
      RenderComponent: withState(BlogListWithOutState)
    },
    {
      name: "social",
      RenderComponent: withState(BlogListWithOutState)
    },
    {
      name: "programming",
      RenderComponent: withState(BlogListWithOutState)
    },
    {
      name: "space",
      RenderComponent: withState(BlogListWithOutState)
    }
  ], []);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <AppTabSlider isSliderContainerScrollable>
        {
          BlogSlides.map(BlogSlide => (
            <AppTabSlider.Slide name={BlogSlide.name} key={BlogSlide.name} component={() => <BlogSlide.RenderComponent />} />
          ))
        }
      </AppTabSlider>
    </View>
  )
}