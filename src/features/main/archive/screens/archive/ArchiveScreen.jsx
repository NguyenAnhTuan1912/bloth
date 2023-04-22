
import { View, Text, SafeAreaView, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { RouteProp, ParamListBase, NavigationProp } from '@react-navigation/native'

import { Button, useTheme, Avatar, IconButton } from 'react-native-paper'

import withState from 'share/hocs/withState'

import AppText from 'share/components/app_text/AppText'
import AppTabSlider from 'share/components/app_tab_slider/AppTabSlider'
import BlogCard from 'share/components/blog_card/BlogCard'
import LibraryArchiveCard from 'share/components/library_archive_card/LibraryArchiveCard'
import LibraryArchiveCardSkeleton from 'share/components/library_archive_card/LibraryArchiveCardSkeleton'
import FunctionsUtility from 'utilities/functions'
import { BlogCardDataCollection } from 'data/BlogCardData'
import BlogCardSkeleton from 'share/components/blog_card/BlogCardSkeleton'

import styles from './ArchiveScreenStyles'

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

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AppText style={{textAlign: 'center'}}>You haven't liked any blogs yet. Please like more blogs to see them here.</AppText>
    </View>
  );
}

const SavedArchive = ({
  data = [],
  setData
}) => {

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AppText style={{textAlign: 'center'}}>You haven't saved any blogs yet. Please save more blogs to see them here.</AppText>
    </View>
  );
}

const LibraryArchive = ({
  data = [],
  setData
}) => {

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AppText style={{textAlign: 'center'}}>You haven't created any libraries yet. Please create a library and add blogs.</AppText>
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
export default function ArchiveScreen() {
  const theme = useTheme();

  const BlogSlides = React.useMemo(() => [
    {
      name: "Liked",
      RenderComponent: withState(LikedArchive)
    },
    {
      name: "Saved",
      RenderComponent: withState(SavedArchive)
    },
    {
      name: "Your library",
      RenderComponent: withState(LibraryArchive)
    }
  ], []);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <AppTabSlider>
        {
          BlogSlides.map(BlogSlide => (
            <AppTabSlider.Child name={BlogSlide.name} key={BlogSlide.name} component={() => <BlogSlide.RenderComponent />} />
          ))
        }
      </AppTabSlider>
    </View>
  )
}