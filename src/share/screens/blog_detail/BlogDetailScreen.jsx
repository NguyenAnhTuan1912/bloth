import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import {  Avatar, IconButton, MD3Colors, Button, useTheme } from 'react-native-paper'

import FunctionsUtility from 'utilities/functions'

import Ionicons from 'react-native-vector-icons/Ionicons'

import AppText from 'share/components/app_text/AppText'
import BlogCard from 'share/components/blog_card/BlogCard'
import BlogCardSkeleton from 'share/components/blog_card/BlogCardSkeleton'
import MarkFormat from 'share/components/mark_format/MarkFormat'

import styles from './BlogDetailScreenStyles'
import app_sp from 'styles/spacing'

import { NavigationProps } from 'share/types/index.d'
import DateTimeUtility from 'utilities/datetime'

import { BlogCardDataCollection } from 'data/BlogCardData'

const text = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

### Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
`;

/**
 * Đây là screen Sign in
 * @param {NavigationProps} props - Props của component.
 * @returns 
 */
export default function BlogDetailScreen({
  route,
  navigation
}) {
  const theme = useTheme();
  /**
   * @type {[Array<BlogCardProps>, React.Dispatch<React.SetStateAction<BlogCardProps[]>>]}
   */
  const [blogCards, setBlogCards] = React.useState([]);

  React.useEffect(() => {
    FunctionsUtility
    .asyncTask(2000)
    .then(message => {
      setBlogCards(BlogCardDataCollection.filter(data => data.authorName === "Nguyễn Anh Tuấn"))
    })
  }, [])

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Blog detail header */}
      <View style={{
        borderBottomWidth: .25,
        borderBottomColor: theme.colors.onBackground,
        ...app_sp.pb_12,
        ...app_sp.mb_12
      }}>
        <AppText fontFamily="SourceSerifPro" font="h1" weight="lighter" color={theme.colors.onBackground}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
        </AppText>

        <View style={[styles.bd_row, app_sp.mt_12]}>
          <View style={styles.bd_row}>
            {
              !undefined
              ? (
                <Ionicons size = {18} name="person-circle-outline" color={theme.colors.onBackground} />
              )
              : (
                <Avatar.Image 
                  source={{
                  uri : undefined
                  }}
                  size = {18}
                />
              )
            }
            <AppText font="body3" style={app_sp.ms_6} color={theme.colors.onBackground}>Nguyễn Anh Tuấn</AppText>
          </View>

          <AppText font="body3" color={theme.colors.onBackground}>{DateTimeUtility.getShortDateString(1675302068000)} - {DateTimeUtility.toMinute(600)} min read.</AppText>
        </View>
      </View>

      {/* Blog detail content */}
      <View>
        <MarkFormat text={text} />
      </View>

      {/* Other information */}
      <View style={{
        borderBottomWidth: .25,
        borderBottomColor: theme.colors.onBackground,
        ...app_sp.pb_12,
        ...app_sp.mb_12
      }}>
        <AppText font="h5" style={[app_sp.mt_22, app_sp.mb_6]} color={theme.colors.onBackground}>About author</AppText>

        {/* Author bio */}
        <View
          style={{
            borderLeftWidth: 5,
            borderLeftColor: theme.colors.onBackground,
            ...app_sp.ps_22
          }}
        >
          <AppText fontStyle="italic" style={{textAlign: 'justify'}} color={theme.colors.onBackground}>
            Xin chào, mình là Tuấn, hiện tại mình dang là Software Engineer của Google, mình mở ra Blog này để chia sẻ cho các bạn mới kiến thức về ngành xây dựng và phát triển phần mềm
          </AppText>
        </View>

        <AppText color={theme.colors.onBackground} style={{textAlign: 'right', ...app_sp.mt_12}}>View more about</AppText>
        <AppText font="h5" color={theme.colors.primary} style={{textAlign: 'right'}}>Nguyễn Anh Tuấn</AppText>
      </View>

      {/* Related blogs */}
      <View>
        <View style={[styles.bd_row, { justifyContent: 'space-between' }]}>
          <AppText font="h5" color={theme.colors.onBackground}>Related blogs</AppText>
          <IconButton
            size={16}
            icon = {() => <Ionicons size={16} name="chevron-forward-outline" color={theme.colors.onBackground} />}
            onPress = {() => {
              alert('chức năng 1')
            }}
          />
        </View>

        <View>
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
        </View>
      </View>

      <View style={{height: 50}}></View>
    </ScrollView>
  )
}