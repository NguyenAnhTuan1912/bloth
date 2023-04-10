import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'
// Import các hook của react-redux tại đây
// useSelector dùng để access vào state trên store. Hiện tại chỉ chỉ có state của blog là state.blog (đã config trong blogSlice).
// useDispatch dùng để 'truyền' các function reducer (action) về store để nó xử lý và lấy state đã setup ở store.
import { useSelector, useDispatch } from 'react-redux'

// Import các actions trong BlogSlice tại đây
import { getBlogsBrief } from 'redux/blog/blogSlice'

import FunctionsUtility from 'utilities/functions'

import { Button, useTheme } from 'react-native-paper'

import withState from 'share/hocs/withState'

import AppText from 'share/components/app_text/AppText'
import BlogCard from 'share/components/blog_card/BlogCard'
import BlogCardSkeleton from 'share/components/blog_card/BlogCardSkeleton'

import styles from './BlogsScreenStyles'
import AppTabSlider from 'share/components/app_tab_slider/AppTabSlider'

import { NavigationProps, BlogCardProps } from 'share/types/index.d'

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
  // Dùng useSelector để access và state.blog.blogsBrief.
  const blogsBrief = useSelector(state => { return state.blogsBrief });
  // Thêm dispatch ở đây.
  const dispatch = useDispatch();

  // Tạm thời chưa gọi dữ liệu về server nên t chỉ setup như thế này thôi.
  React.useEffect(() => {
    FunctionsUtility
    .asyncTask(2000)
    .then(message => {
      dispatch(getBlogsBrief())
      setData(blogsBrief);
    })
  }, [])

  return (
    <View style={{width: '100%'}}>
      {
        blogsBrief.length === 0
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
            data={blogsBrief}
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
            <AppTabSlider.Child name={BlogSlide.name} key={BlogSlide.name} component={() => <BlogSlide.RenderComponent />} />
          ))
        }
      </AppTabSlider>
    </View>
  )
}