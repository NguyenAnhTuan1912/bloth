import { View, Image, Pressable } from 'react-native'
import {Snackbar, useTheme} from 'react-native-paper'
import React, {useState} from 'react'

import {Avatar, IconButton } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'

import AppText from 'share/components/app_text/AppText'

import styles from './LibraryArchiveCardStyles'
import app_sp from 'styles/spacing'

export default function LibraryArchiveCard(props) {

  const theme = useTheme();
  const [visible, setVisible] = useState(false)

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);


  return (
    <View style={[{
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.outlineVariant
    }]}>
      <Snackbar
        style={{
          backgroundColor: theme.colors.background,
          borderBottomWidth: 3,
          borderBottomColor: theme.colors.outlineVariant
        }}
        visible= {visible}
        onDismiss={onDismissSnackBar}
        wrapperStyle={{flex: 1, width: '90%', top: 0, zIndex: 9999}}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        <AppText>Got it. You will see fewer stories like this</AppText>
      </Snackbar>
      <View style={styles.libcard_container}>
        <View style={[styles.libcard_container_col, { position: 'relative' }]}>
          <Pressable onPress={() => { navigation.push("BlogDetailScreen") }}>
            <Image
              source = {{
                uri : props.image
              }}
              style = {[styles.libcard_image, {backgroundColor: 'black', zIndex: 1}]}
            />
            <Image
              source = {{
                uri : props.image1
              }}
              style = {[styles.libcard_image, {position:'absolute', left: 20, zIndex: 2, backgroundColor:'blue'}]}
            />
            <Image
              source = {{
                uri : props.image2
              }}
              style = {[styles.libcard_image, {position:'absolute', left: 40, zIndex: 3, backgroundColor: 'red'}]}
            />
          </Pressable>
        </View>

        {/* Content - Cột của phần còn lại, trong này thì gồm có 2 hàng. Hàng content và hàng button */}
        <View style={[styles.libcard_container_col, styles.libcard_content_container]}>
          
          {/* Hàng content */}
          <View style={{ flex: 1 , width: '100%', ...app_sp.mt_12}}>
            <View style={[styles.libcard_container_col, app_sp.mb_12]}>
              <View style={styles.libcard_author_info_container}>
                <AppText font="sub1">{`${props.countBlog} Blog(s)`}</AppText>
              </View >

              <View style={{flex: 1}}>
                <AppText numberOfLines={3} font="h5">{props.title}</AppText>
                <AppText font="body3" >{props.des}</AppText>
              </View>
            </View>

            <View style={styles.libcard_container_row}>
              <View>
                <Avatar.Image 
                  size={18}
                  style= {{zIndex: 1}}
                  source = {{
                    uri : props.image
                  }}
                />
                  <Avatar.Image 
                  size={18}
                  style= {{zIndex: 2, top: 0, left: 7, position:'absolute'}}
                  source = {{
                    uri : props.image1
                  }}
                />
                  <Avatar.Image 
                  size={18}
                  style= {{zIndex: 3,top: 0, left: 14, position:'absolute'}}
                  source = {{
                    uri : props.image2
                  }}
                />
              </View>
              <View style= {{marginLeft: 20}}>
                <AppText font='sub1'>{`${props.countAuthor} author(s)`}</AppText>
              </View>
            </View>
          </View>

          {/* Hàng button */}
          <View style={styles.libcard_content_button_container}>
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
              onPress = {onToggleSnackBar}
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
      </View>
    </View>
  )
}