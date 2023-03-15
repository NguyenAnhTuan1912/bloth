import { View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { RouteProp, ParamListBase, NavigationProp } from '@react-navigation/native'

import { useTheme } from 'react-native-paper'

import withState from 'share/hocs/withState'

import AppText from 'share/components/app_text/AppText'
import styles from './HomeScreenStyles'

import AppTabSlider from 'share/components/app_tab_slider/AppTabSlider'
import BlogCard from 'share/components/blog_card/BlogCard'
import FunctionsUtility from 'utilities/functions'
import { BlogCardDataCollection } from 'data/BlogCardData'
import BlogCardSkeleton from 'share/components/blog_card/BlogCardSkeleton'
import app_sp from 'styles/spacing'

/**
 * @typedef BlogListProps
 * @property {any[]} data
 * @property {React.Dispatch<React.SetStateAction<any[]>>} setData
 */

/**
 * @param {BlogListProps} props Props của component.
 * @return `ScrollView` có chứa các BlogCard
 */
const LikedArchive = ({
  data = [],
  setData
}) => {
  React.useEffect(() => {
    FunctionsUtility
    .asyncTask(2000)
    .then(() => {
      setData(BlogCardDataCollection)
    })
  }, []);

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

const SavedArchive = ({
  data = [],
  setData
}) => {
  React.useEffect(() => {
    FunctionsUtility
    .asyncTask(2000)
    .then(() => {
      setData(BlogCardDataCollection)
    })
  }, []);

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
 * @typedef NavigationProps
 * @property {RouteProp<ParamListBase, string>} route
 * @property {NavigationProp<T>} navigation
 */

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

  const BlogSlides = React.useMemo(() => [
    {
      name: "Newest",
      RenderComponent: withState(LikedArchive)
    },
    {
      name: "Recommeded",
      RenderComponent: withState(SavedArchive)
    }
  ], []);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <AppText font = 'h1' style= {[app_sp.mt_12, app_sp.ph_18]}>Reading is great and sharing is too. </AppText>
      <View style={{ height: 75 }}></View>
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