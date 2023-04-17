import { View, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { 
  userDetailSelector
} from 'app_redux/user/userSlice'

import FunctionsUtility from 'utilities/functions'
import StringUtility from 'utilities/string'

import AsyncStorage from '@react-native-async-storage/async-storage'

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
  const theme = useTheme();
  /**
   * @type {[Array<BlogCardProps>, React.Dispatch<React.SetStateAction<BlogCardProps[]>>]}
   */
  const [blogCards, setBlogCards] = React.useState([]);
  const user = useSelector(userDetailSelector);

  return (
    user && <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollview}>
        <View style={styles.user}>
          <View style={styles.userInfo}>
            <Avatar.Image
              source={{
                uri : 'https://bom.so/zAbBqX'
              }}
              size= {120}
            />
            <View style={app_sp.mt_12}>
              <AppText font='h2' color={theme.colors.onBackground}>{user.lastName + " " + user.firstName}</AppText>
              <AppText font='sub1' color={theme.colors.onBackground}>{StringUtility.toTitleCase(user.career)}</AppText>
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
                <AppText style={styles.aboutCaption} color={theme.colors.onBackground}>{user.bio}</AppText>
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