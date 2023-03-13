import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'

import FunctionsUtility from 'utilities/functions'

import { Button, useTheme } from 'react-native-paper'

import withState from 'share/hocs/withState'

import AppText from 'share/components/app_text/AppText'
import BlogCard from 'share/components/blog_card/BlogCard'
import BlogCardSkeleton from 'share/components/blog_card/BlogCardSkeleton'

import styles from './BlogsScreenStyles'
import AppTabSlider from 'share/components/app_tab_slider/AppTabSlider'

import { NavigationProps, BlogCardProps } from 'share/types/index.d'

import { BlogCardDataCollection } from 'data/BlogCardData'

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
  React.useEffect(() => {
    FunctionsUtility
    .asyncTask(2000)
    .then(message => {
      console.log(message);
      setData(BlogCardDataCollection)
    })
  }, [])

  return (
    <View style={{width: '100%'}}>
      {
        data.length === 0
        ? (
          <ScrollView>
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
          </ScrollView>
        )
        : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <BlogCard {...item} />
            )}
            keyExtractor={item => item.id}
          />
        )
      }
    </View>
  );
}

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
      name: "For you",
      RenderComponent: withState(BlogListWithOutState)
    },
    {
      name: "life",
      RenderComponent: withState(BlogListWithOutState)
    },
  ], []);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <AppTabSlider>
        {
          BlogSlides.map(BlogSlide => (
            <AppTabSlider.Slide name={BlogSlide.name} key={BlogSlide.name} component={() => <BlogSlide.RenderComponent />} />
          ))
        }
      </AppTabSlider>
    </View>
  )
}