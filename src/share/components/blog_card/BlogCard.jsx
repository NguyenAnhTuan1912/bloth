import styles from './BlogCardStyles'
import { View, Image, Pressable } from 'react-native';
import {  Avatar, IconButton, MD3Colors, useTheme} from 'react-native-paper'

import DateTimeUtility from 'utilities/datetime';

import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons'

import AppText from '../app_text/AppText';

import app_sp from 'styles/spacing';

import { BlogCardProps } from 'share/types/index.d';

/**
 * __Creator__: @levnhai
 * 
 * __Editor__ @NguyenAnhTuan1912
 * 
 * Blog card là component chứa các thông tin ngắn gọn nhát của một blog. Ngoài những thông tin được hiển thị ra thì nó còn có một số thông tin ấn nữa.
 * @param {BlogCardProps} props Props của component.
 * @returns 
 */
export default function BlogCard(props) {
  const navigation = useNavigation();
  const theme = useTheme();
  const fullName = props.author.lastName + " " + props.author.firstName;

  const handleOpenBlogDetails = () => {
    navigation.push("BlogDetailScreen", { id: props._id })
  }

  return ( 
    <View style={[styles.blog_container, {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.outlineVariant
    }]}>
      {/* Image - Cột ảnh */}
      <View style={styles.blog_container_col}>
        <Pressable onPress={handleOpenBlogDetails}>
          <Image
            source={{ uri: props.image }}
            style={styles.blog_image}
          />
        </Pressable>
      </View>

      {/* Content - Cột của phần còn lại, trong này thì gồm có 2 hàng. Hàng content và hàng button */}
      <View style={[styles.blog_container_col, styles.blog_content_container]}>
        
        {/* Hàng content */}
        <View style={{ flex: 1 , width: '100%'}}>
          <View style={styles.blog_author_info_container}>
            {
              !props.author.presentationImage
              ? (
                <Ionicons size = {18} name="person-circle-outline" color={theme.colors.onBackground} />
              )
              : (
                <Avatar.Image
                  source={{
                  uri : props.image
                  }}
                  size = {18}
                />
              )
            }
            <AppText font="sub1" style={app_sp.ms_6} >{fullName}</AppText>
          </View >

          <View style={{flex: 1}}>
          <AppText numberOfLines={3} font="h5" onPress={handleOpenBlogDetails}  >{props.title}</AppText>
          <AppText font="body2" >
            {DateTimeUtility.getShortDateString(new Date(props.createAt).getTime())} - {DateTimeUtility.toMinute(new Date(props.readTime).getTime())} min read.
          </AppText>
          </View>
        </View>

        {/* Hàng button */}
        <View style={styles.blog_content_button_container}>
          <IconButton
            size={16}
            icon = {() => <Ionicons size={16} name="bookmark-outline" color={theme.colors.onBackground} />}
            onPress = {() => {
              alert('chức năng 1')
            }}
          />
          <IconButton 
            size={16}
            icon = {() => <Ionicons size={16} name = "remove-outline" color={theme.colors.onBackground} />}
            onPress = {() => {
              alert('chức năng 2')
            }}
          />
          <IconButton 
            size={16}
            icon={() => <Ionicons size={16} name="ellipsis-horizontal" color={theme.colors.onBackground} />}
            onPress = {() => {
              alert('chức năng 3')
            }}
            
          />
        </View>
      </View>
    </View >
  );
}