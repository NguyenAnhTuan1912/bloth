import { View, ScrollView } from 'react-native'
import React from 'react'

import FunctionsUtility from 'utilities/functions'

import { Button, useTheme, Avatar, Title, IconButton} from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'

import AppText from 'share/components/app_text/AppText'
import BlogCard from 'share/components/blog_card/BlogCard'
import BlogCardSkeleton from 'share/components/blog_card/BlogCardSkeleton'

import styles from './ProfileScreenStyles'
import app_sp from 'styles/spacing'

import { NavigationProps, BlogCardProps } from 'share/types/index.d'

import { BlogCardDataCollection } from 'data/BlogCardData'

/**
 * Đây là screen Sign in
 * @param {NavigationProps} props - Props của component.
 * @returns 
 */
export default function ProfileScreen() {
  /**
   * @type {[Array<BlogCardProps>, React.Dispatch<React.SetStateAction<BlogCardProps[]>>]}
   */
  const [blogCards, setBlogCards] = React.useState([]);
  const theme = useTheme();
  let userName = "Nguyễn Anh Tuấn";

  React.useEffect(() => {
    FunctionsUtility
    .asyncTask(2000)
    .then(message => {
      console.log(message);
      setBlogCards(BlogCardDataCollection.filter(data => data.authorName === userName))
    })
  }, [userName])

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollview}>
        <View style={styles.user}>
          <View style={styles.userInfo}>
            <Avatar.Image
              source={{
                uri : 'https://bom.so/zAbBqX'
              }}
              size= {60}
            />
            <View >
              <AppText font='h2' color={theme.colors.onBackground}>{userName}</AppText>
              <AppText font='sub1' color={theme.colors.onBackground}>Software Engineer</AppText>
            </View>
          </View>
          <View style = {styles.profileBtn}>
            <Button mode='contained' style={styles.userBtn} onPress = {() => {} }><AppText weight="bolder" color={theme.colors.onPrimary}>View stats</AppText></Button>
            <Button mode='outlined' style={styles.userBtn} onPress = {() => alert('edit profile')}><AppText weight="bolder" color={theme.colors.onBackground}>Edit Profile</AppText></Button>
            <IconButton
              icon={() => <Ionicons size={16} name="ellipsis-horizontal" color={theme.colors.onBackground}/>}
              onPress={() => alert('3 chấm')}
              style={styles.settingIcon}
            />
          </View>
        </View>
  
        {/* introdution */}
        <View style={{
          borderTopWidth: 1,
          borderTopColor: theme.colors.outlineVariant,
          ...app_sp.pv_12,
          ...app_sp.ph_18
        }}>
           <View>
             <View>
                <AppText font='h5' color={theme.colors.onBackground}>Introduction</AppText>
                <AppText style = {styles.aboutCaption} color={theme.colors.onBackground}>Xin chào, mình là Tuấn, hiện tại mình dang là Software Engineer của Google, mình mở ra Blog này để chia sẻ cho các bạn mới kiến thức về ngành xây dựng và phát triển phần mềm</AppText>
              </View>
              <View>
                <AppText font='h5' color={theme.colors.onBackground}>Link</AppText> 
                <View style = {styles.linkItem}>
                <Avatar.Image 
                  source={{
                    uri : 'https://bom.so/lR0Mw6'
                  }}
                  size= {18}
                  style = {styles.linkIcon}
                />
                  <AppText style = {{...styles.aboutCaption, color: 'red', ...app_sp.ms_6 }} hyperLink="https://github.com/">mygithub.com</AppText>
                </View>
  
                <View style = {styles.linkItem}>
                <Avatar.Image 
                  source={{
                    uri : 'https://bom.so/0zPgt2'
                  }}
                  size= {18}
                  style = {styles.linkIcon}
                />
                  <AppText style = {{...styles.aboutCaption, color: 'red', ...app_sp.ms_6 }} hyperLink="https://facebook.com">mywebsite.com</AppText>
                </View>
                
              </View>
           </View>
        </View>
        {/* blog */}
        <View style={{
          borderTopWidth: 1,
          borderTopColor: theme.colors.outlineVariant
        }}>
            <AppText font='h5' style = {styles.blogHeader}>Your Blogs</AppText>

            {/* blogCart */}
            <View style={{
              borderTopWidth: 1,
              borderTopColor: theme.colors.outlineVariant
            }}>
              {
                blogCards.length === 0
                ? (
                  <>
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                  </>
                )
                : (
                  blogCards.map(blogCard => (
                    <BlogCard {...blogCard} key={blogCard.id} />
                  ))
                )
              }
              {/* <BlogCard {...blogCards[0]} key={blogCards[0].id} />
              <BlogCardSkeleton /> */}
            </View>
        </View>
      </ScrollView >
    </View>
  )
}