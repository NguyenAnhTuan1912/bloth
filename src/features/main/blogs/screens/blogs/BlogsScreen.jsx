import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'
// Import các hook của react-redux tại đây
// useSelector dùng để access vào state trên store. Hiện tại chỉ chỉ có state của blog là state.blog (đã config trong blogSlice).
// useDispatch dùng để 'truyền' các function reducer (action) về store để nó xử lý và lấy state đã setup ở store.
import { useSelector, useDispatch } from 'react-redux'

// Import các actions trong BlogSlice tại đây
import { 
  fetchBriefBlogByType,
  briefBlogsSelector,
  createBriefBlog
} from 'app_redux/blog/blogSlice'

import FunctionsUtility from 'utilities/functions'

import { userDetailSelector } from 'app_redux/user/userSlice'

import { useRole } from 'share/hooks/useRole'
import { useTheme } from 'react-native-paper'

import BlogCard from 'share/components/blog_card/BlogCard'
import BlogCardSkeleton from 'share/components/blog_card/BlogCardSkeleton'

import styles from './BlogsScreenStyles'
import AppTabSlider from 'share/components/app_tab_slider/AppTabSlider'

import { NavigationProps, BlogCardProps } from 'share/types/index.d'

const BlogBriefView = ({
  typeOfBlog
}) => {
  // Dùng useSelector để access và state.blog.blogsBrief.
  const blogsBrief = useSelector(state => briefBlogsSelector(state, typeOfBlog));
  // Thêm dispatch ở đây.
  const dispatch = useDispatch();
  const fields = 'title;image;createAt;isRecommended;type;author;readTime';

  React.useEffect(() => {
    if(!blogsBrief) {
      dispatch(createBriefBlog(typeOfBlog));
      dispatch(fetchBriefBlogByType({typeOfBlog, fields}))
    } else if(blogsBrief.data.length === 0) {
      dispatch(fetchBriefBlogByType({typeOfBlog, fields}))
    }
  }, [])

  return (
    <View style={{width: '100%'}}>
      {
        !blogsBrief
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
            data={blogsBrief.data}
            renderItem={({ item }) => (
              <BlogCard {...item} />
            )}
            keyExtractor={item => item._id}
          />
        )
      }
    </View>
  )
}

const withTypeOfBlog = (typeOfBlog) => {
  return function() {
    return <BlogBriefView typeOfBlog={typeOfBlog} />
  }
}

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
          RenderComponent: withTypeOfBlog("all")
        },
        {
          name: "recommended",
          RenderComponent: withTypeOfBlog("recommended")
        },
      ])
    } else {
      return user.interestedTypeOfBlogs.map(insterestedType => (
        {
          name: insterestedType,
          RenderComponent: withTypeOfBlog(insterestedType)
        }
      ))
    }
  }, [userRole]);

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