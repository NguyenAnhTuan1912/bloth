import { View, Text, FlatList } from 'react-native'
import React from 'react'

import { useBriefBlogs } from 'share/hooks/useBlogSlice';

import AppText from '../app_text/AppText';
import BlogCard from '../blog_card/BlogCard';
import Loading from '../loading/Loading';

import { BLOG_CARD_FIELDS } from 'utilities/constants';

const BlogCardList = ({
  typeOfBlog
}) => {
  // Dùng useSelector để access và state.blog.blogsBrief.
  const { blogs, blogsDispatcher } = useBriefBlogs(typeOfBlog);
  const componentInfo = React.useRef({
    blogsLength: 0,
    reachEnd: false
  });

  React.useEffect(() => {
    if(!blogs) {
      blogsDispatcher.fetchBriefBlogs(BLOG_CARD_FIELDS);
    }
  }, [typeOfBlog]);

  const handleBlogCardListScroll = e => {
    const { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent;
      // if(layoutMeasurement.height + contentOffset.y >= contentSize.height) {
      //   console.log("Layout measuarement: ", layoutMeasurement.height);
      //   console.log("Content offset Y: ", contentOffset.y);
      //   console.log("Content size: ", contentSize.height);
      //   // blogsDispatcher.inscreaseSkip();
      //   // blogsDispatcher.fetchBriefBlogs(BLOG_CARD_FIELDS);
      //   componentInfo.current.reachEnd = false;
      // }
      if(componentInfo.current.reachEnd) {
        // console.log("Layout measuarement: ", layoutMeasurement.height);
        // console.log("Content offset Y: ", contentOffset.y);
        // console.log("Content size: ", contentSize.height);
        blogsDispatcher.inscreaseSkip();
        blogsDispatcher.fetchBriefBlogs(BLOG_CARD_FIELDS);
      }
      componentInfo.current.reachEnd = false;
  }

  const handleEndReach = e => {
    componentInfo.current.reachEnd = true
  }

  if(!blogs) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Loading />
      </View>
    )
  }

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
            onEndReached={handleEndReach}
            onMomentumScrollEnd={handleBlogCardListScroll}
          />
        )
      }
    </View>
  )
}

export default BlogCardList