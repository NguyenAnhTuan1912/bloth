import { View, ScrollView } from 'react-native'
import React from 'react'
import { Button, useTheme, Avatar, Title, IconButton} from 'react-native-paper'

import Ionicons from 'react-native-vector-icons/Ionicons'

import AppText from 'share/components/app_text/AppText'
import BlogCard from 'share/components/blog_card/BlogCard'
import ProfileNavigator from '../../ProfileNavigator'

import styles from './ProfileScreenStyles'
import app_sp from 'styles/spacing'

import { NavigationProp } from '@react-navigation/native'

/**
 * Đây là screen Sign in
 * @param {NavigationProps} props - Props của component.
 * @returns 
 */
export default function ProfileScreen() {
  const theme = useTheme();

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
              <AppText font='h2'>Nguyễn Anh Tuấn</AppText>
              <AppText font='sub1'>Software Engineer</AppText>
            </View>
          </View>
          <View style = {styles.profileBtn}>
            <Button mode='contained' style={styles.userBtn} onPress = {() => {} }><AppText weight="bolder">View stats</AppText></Button>
            <Button mode='outlined' style={styles.userBtn} onPress = {() => alert('edit profile')}><AppText weight="bolder">Edit Profile</AppText></Button>
            <IconButton
              icon={() => <Ionicons size={16} name="ellipsis-horizontal" />}
              onPress={() => alert('3 chấm')}
              style={styles.settingIcon}
            />
          </View>
        </View>
  
        {/* introdution */}
        <View style = {styles.aboutUs}>
           <View style ={styles.listaboutUs}>
             <View >
                <AppText font='h5' style = {styles.aboutTitle}>Introduction</AppText>
                <AppText style = {styles.aboutCaption}>Xin chào, mình là Tuấn, hiện tại mình dang là Software Engineer của Google, mình mở ra Blog này để chia sẻ cho các bạn mới kiến thức về ngành xây dựng và phát triển phần mềm</AppText>
              </View>
              <View>
                <AppText font='h5' style = {styles.aboutTitle}>Link</AppText> 
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
        <View style ={styles.myBlog}>
            <AppText font='h5' style = {styles.blogHeader}>Your Blogs</AppText>
            
            {/* blogCart */}
           <View style={{borderTopWidth: 1, borderColor:'rgba(38, 38, 38, 0.5)'}}>
            <BlogCard userName = 'Nguyễn Anh Tuấn' image = 'https://bom.so/uEBIm0' title ='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' time = 'Feb 24, 2023 - 4 min read' />
            <BlogCard userName = 'Nguyễn Anh Tuấn' image = 'https://bom.so/xLT9ss' title ='Essential Convepts in Funtional Programming With JavaScript.' time = 'Feb 24, 2023 - 4 min read' />
            <BlogCard userName = 'Nguyễn Anh Tuấn' image = 'https://bom.so/VNMliM' title ='Now four years sober, I found non-alcoholic paradise in this outer Richmound ravern.' time = 'Feb 24, 2023 - 4 min read' />
            <BlogCard userName = 'Nguyễn Anh Tuấn' image = 'https://bom.so/pGjD8Z' title ='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' time = 'Feb 24, 2023 - 4 min read' />
            <BlogCard userName = 'Nguyễn Anh Tuấn' image = 'https://bom.so/rBUTNZ' title ='Now four years sober, I found non-alcoholic paradise in this outer Richmound ravern.' time = 'Feb 24, 2023 - 4 min read' />
           </View>
        </View>
      </ScrollView >
    </View>
  )
}