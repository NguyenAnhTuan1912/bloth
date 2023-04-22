import { View, Text } from 'react-native'
import React from 'react'

import AppText from '../app_text/AppText';
import { useBriefBlogs } from 'share/hooks/useBlogSlice';

export const BlogCardListWithSliceHook = ({
  typeOfBlog
}) => {
  // Dùng useSelector để access và state.blog.blogsBrief.
  const { blogs, blogsDispatch } = useBriefBlogs(typeOfBlog);
  const fields = 'title;image;createAt;isRecommended;type;author;readTime';

  React.useEffect(() => {
    if(!blogs || blogs.data.length === 0) {
      blogsDispatch.fetchBriefBlogsWithSpecificFields(fields);
    }
  }, []);

  return (
    <View style={{width: '100%'}}>
      {
        !blogs
        ? (
          <AppText style={{width: '100%', textAlign: "center"}}>
            Data haven't loaded yet.
          </AppText>
        )
        : (
          <FlatList
            data={blogs.data}
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

/**
 * __HOC__
 * 
 * HOC này chỉ dùng với các `BlogCard` mà được render bởi `FlatList`, `ScrollView`...
 * Ngoài ra thì `WrappedComponent` còn phải có thuộc tính `typeOfBlog`.
 * @param {JSX.Element} WrappedComponent 
 * @param {JSX.Element} callSliceHook Slice hook có thể là một function gọi slide hook, nhưng đồng thời cũng có thể là slide 
 * @param {string} typeOfBlog 
 * @returns 
 */
const withSliceHook = (WrappedComponent, callSliceHook, typeOfBlog) => {
  return function() {
    // Dùng useSelector để access và state.blog.blogsBrief.
    const { data, dataDispatch } = callSliceHook()

    return <WrappedComponent typeOfBlog={typeOfBlog} data={data} dataDispatch={dataDispatch} />
  }
}

export default withBriefBlogsHook;