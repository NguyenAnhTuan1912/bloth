
import { View, Text, SafeAreaView, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { RouteProp, ParamListBase, NavigationProp } from '@react-navigation/native'

import { Button, useTheme, Avatar, IconButton } from 'react-native-paper'

import withState from 'share/hocs/withState'

import AppText from 'share/components/app_text/AppText'
import styles from './ArchiveScreenStyles'

import AppTabSlider from 'share/components/app_tab_slider/AppTabSlider'
import BlogCard from 'share/components/blog_card/BlogCard'
import LibraryArchiveCard from 'share/components/library_archive_card/LibraryArchiveCard'
import LibraryArchiveCardSkeleton from 'share/components/library_archive_card/LibraryArchiveCardSkeleton'
import FunctionsUtility from 'utilities/functions'
import { BlogCardDataCollection } from 'data/BlogCardData'
import BlogCardSkeleton from 'share/components/blog_card/BlogCardSkeleton'

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

const LibraryArchive = ({
  data = [],
  setData
}) => {
  
  React.useEffect(() => {
    FunctionsUtility
    .asyncTask(2000)
    .then(() => {
      setData([1])
    })
  }, []);

  return (
    <ScrollView style={{width: '100%'}}>
      {
        data.length === 0
        ? (
          <>
            <LibraryArchiveCardSkeleton />
            <LibraryArchiveCardSkeleton />
            <LibraryArchiveCardSkeleton />
          </>
        )
        : (
          <>
            <LibraryArchiveCard countBlog = '5' countAuthor = '3' title ='My Favorite' des = 'Save for read later' image='https://bom.so/olfaxe' image1 ='https://bom.so/Qehzsw' image2='https://bom.so/xLT9ss' />
            <LibraryArchiveCard countBlog = '6' countAuthor = '2' title ='Tech' des = 'Save for read later' image='https://bom.so/olfaxe' image1 ='https://bom.so/FriPnP' image2='https://bom.so/xLT9ss' />
            <LibraryArchiveCard countBlog = '4' countAuthor = '3' title ='Design' des = 'Save for read later' image='https://bom.so/olfaxe' image1 ='https://bom.so/Qehzsw' image2='https://bom.so/YJgXyw' />
          </>
        )
      }
    </ScrollView>
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
export default function ArchiveScreen({
  route,
  navigation
}) {
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
            <AppTabSlider.Slide name={BlogSlide.name} key={BlogSlide.name} component={() => <BlogSlide.RenderComponent />} />
          ))
        }
      </AppTabSlider>
    </View>
  )
}