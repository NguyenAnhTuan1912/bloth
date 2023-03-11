
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { RouteProp, ParamListBase, NavigationProp } from '@react-navigation/native'

import { Button, useTheme, Avatar, IconButton } from 'react-native-paper'

import withState from 'share/hocs/withState'

import AppText from 'share/components/app_text/AppText'
import styles from '../../ArchiveScreenStyles'

import AppTabSlider from 'share/components/app_tab_slider/AppTabSlider'
import BlogCard from 'share/components/blog_card/BlogCard'
import LibraryArchiveScreen from './LibraryArchive'

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
    <View style={{width: '100%'}}>
      <View >
        <BlogCard userName = 'Nguyễn Anh Tuấn' image = 'https://bom.so/zAbBqX' title ='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' time = 'Feb 24, 2023 - 4 min read' />
        <BlogCard userName = 'Kiều Trinh' image = 'https://bom.so/W6Hfry' title ='Essential Convepts in Funtional Programming With JavaScript.' time = 'Feb 11, 2023 - 10 min read' />
        <BlogCard userName = 'Lê Văn Hải' image = 'https://bom.so/xLT9ss' title ='All Javascript and TypeScript Features of the last 4 years.' time = 'Feb 24, 2023 - 4 min read' />
        <BlogCard userName = 'Lê Văn Hải' image = 'https://bom.so/Cw4wWt' title ='Programming principles they don teach you in school.' time = 'Feb 24, 2023 - 4 min read' />
        <BlogCard userName = 'Đàm Phúc Lộc' image = 'https://bom.so/t6YKLi' title ='Now four years sober, I found non-alcoholic paradise in this outer Richmound ravern.' time = 'Feb 24, 2023 - 4 min read' />
        <BlogCard userName = 'Đàm Phúc Lộc' image = 'https://bom.so/rBUTNZ' title ='Now four years sober, I found non-alcoholic paradise in this outer Richmound ravern.' time = 'Feb 24, 2023 - 4 min read' />
      </View>
    </View>
  );
}

const SavedArchive = ({
  data = [],
  setData
}) => {
  return (
    <View style={{width: '100%'}}>
      <AppText>
        <BlogCard userName = 'Nguyễn Anh Tuấn' image = 'https://bom.so/zAbBqX' title ='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' time = 'Feb 24, 2023 - 4 min read' />
        <BlogCard userName = 'Nguyễn Anh Tuấn' image = 'https://bom.so/xLT9ss' title ='Now four years sober, I found non-alcoholic paradise in this outer Richmound ravern.' time = 'Feb 24, 2023 - 4 min read' />
        <BlogCard userName = 'Lê Văn Hải' image = 'https://bom.so/VNMliM' title ='Essential Convepts in Funtional Programming With JavaScript.' time = 'Feb 24, 2023 - 4 min read' />
        <BlogCard userName = 'Lê Văn Hải' image = 'https://bom.so/pGjD8Z' title ='All Javascript and TypeScript Features of the last 4 years.' time = 'Feb 24, 2023 - 4 min read' />
        <BlogCard userName = 'Đàm Phúc Lộc' image = 'https://bom.so/uEBIm0' title ='Now four years sober, I found non-alcoholic paradise in this outer Richmound ravern.' time = 'Feb 24, 2023 - 4 min read' />
        <BlogCard userName = 'Hoàng Quỳnh' image = 'https://bom.so/rBUTNZ' title ='Now four years sober, I found non-alcoholic paradise in this outer Richmound ravern.' time = 'Feb 24, 2023 - 4 min read' />
      </AppText>
    </View>
  );
}

const LibraryArchive = ({
  data = [],
  setData
}) => {
  return (
    <View style={{width: '100%'}}>
       <LibraryArchiveScreen countBlog = '5' countAuthor = '3' title ='My Favorite' des = 'Save for read later' image='https://bom.so/olfaxe' image1 ='https://bom.so/Qehzsw' image2='https://bom.so/xLT9ss' />
       <LibraryArchiveScreen countBlog = '6' countAuthor = '2' title ='My Favorite' des = 'Save for read later' image='https://bom.so/olfaxe' image1 ='https://bom.so/FriPnP' image2='https://bom.so/xLT9ss' />
       <LibraryArchiveScreen countBlog = '4' countAuthor = '3' title ='My Favorite' des = 'Save for read later' image='https://bom.so/olfaxe' image1 ='https://bom.so/Qehzsw' image2='https://bom.so/YJgXyw' />
       <LibraryArchiveScreen countBlog = '5' countAuthor = '4' title ='My Favorite' des = 'Save for read later' image='https://bom.so/olfaxe' image1 ='https://bom.so/Qehzsw' image2='https://bom.so/xLT9ss' />
       <LibraryArchiveScreen countBlog = '5' countAuthor = '3' title ='My Favorite' des = 'Save for read later' image='https://bom.so/olfaxe' image1 ='https://bom.so/Qehzsw' image2='https://bom.so/xLT9ss' />
       <LibraryArchiveScreen countBlog = '5' countAuthor = '3' title ='My Favorite' des = 'Save for read later' image='https://bom.so/olfaxe' image1 ='https://bom.so/Qehzsw' image2='https://bom.so/xLT9ss' />
       <LibraryArchiveScreen countBlog = '5' countAuthor = '3' title ='My Favorite' des = 'Save for read later' image='https://bom.so/olfaxe' image1 ='https://bom.so/Qehzsw' image2='https://bom.so/xLT9ss' />
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