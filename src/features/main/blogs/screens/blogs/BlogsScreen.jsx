import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'
// Import các hook của react-redux tại đây
// useSelector dùng để access vào state trên store. Hiện tại chỉ chỉ có state của blog là state.blog (đã config trong blogSlice).
// useDispatch dùng để 'truyền' các function reducer (action) về store để nó xử lý và lấy state đã setup ở store.
import { useSelector, useDispatch } from 'react-redux'

import FunctionsUtility from 'utilities/functions'

import { userDetailSelector } from 'app_redux/user/userSlice'

import { useRole } from 'share/hooks/useUserSlice'
import { useTheme } from 'react-native-paper'

import AppText from 'share/components/app_text/AppText'
import BlogCard from 'share/components/blog_card/BlogCard'
import BlogCardSkeleton from 'share/components/blog_card/BlogCardSkeleton'
import BlogCardList from 'share/components/blog_card_list/BlogCardList'

import styles from './BlogsScreenStyles'
import AppTabSlider from 'share/components/app_tab_slider/AppTabSlider'

import { NavigationProps, BlogCardProps } from 'share/types/index.d'

/**
 * Đây là screen Sign in
 * @param {NavigationProps} props - Props của component.
 * @returns 
 */
export default function BlogsScreen() {
  const theme = useTheme();
  const { userRole } = useRole();
  const user = useSelector(userDetailSelector);

  const BlogSlides = React.useMemo(() => {
    if(userRole === "GUEST") {
      return ([
        {
          name: "all",
          RenderComponent: () => <BlogCardList typeOfBlog="all" />
        },
        {
          name: "recommended",
          RenderComponent: () => <BlogCardList typeOfBlog="recommended" />
        },
      ])
    } else {
      let actualUserBlogType = ["all", ...user.interestedTypeOfBlogs]
      return actualUserBlogType.map(insterestedType => (
        {
          name: insterestedType,
          RenderComponent: () => <BlogCardList typeOfBlog={insterestedType} />
        }
      ))
    }
  }, [userRole, user.interestedTypeOfBlogs]);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {
        BlogSlides.length === 0
        ? (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <AppText style={{textAlign: 'center'}}>You haven't interested in any blogs.</AppText>
          </View>
        )
        : (
          <AppTabSlider>
            {
              BlogSlides.map(BlogSlide => (
                <AppTabSlider.Child name={BlogSlide.name} key={BlogSlide.name} component={() => <BlogSlide.RenderComponent />} />
              ))
            }
          </AppTabSlider>
        )
      }
    </View>
  )
}