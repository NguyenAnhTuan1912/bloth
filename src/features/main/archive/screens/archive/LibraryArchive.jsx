import { View, Image } from 'react-native'
import {Snackbar} from 'react-native-paper'
import React, {useState} from 'react'

import {Avatar, IconButton } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'

import AppText from 'share/components/app_text/AppText'

import styles from '../../ArchiveScreenStyles'
import app_sp from 'styles/spacing'

const LibraryArchiveScreen = (props) => {

  const [visible, setVisible] = useState(false)

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  return (
      <View style = {styles.libraryArchive}>
        <Snackbar
              visible= {visible}
              onDismiss={onDismissSnackBar}
              wrapperStyle={{flex: 1, height: '100%', top: 0, zIndex: 10 }}
              action={{
                label: 'Undo',
                onPress: () => {
                  // Do something
                },
              }}>
             Got it. You will see fewer stories like this
            </Snackbar>
          <View style = {styles.libraryArchiveItem}>
            <View style = {styles.libraryArchiveBlog}>
              <View style = {styles.libraryArchiveImageBlock}>
                <Image
                  source = {{
                    uri : props.image
                  }}
                  style = {[styles.libraryArchiveImage, {backgroundColor: 'black', zIndex: 1}]}
                />
                 <Image
                  source = {{
                    uri : props.image1
                  }}
                  style = {[styles.libraryArchiveImage, {position:'absolute', left: 20, zIndex: 2, backgroundColor:'blue'}]}
                />
                 <Image
                  source = {{
                    uri : props.image2
                  }}
                  style = {[styles.libraryArchiveImage, {position:'absolute', left: 40, zIndex: 3, backgroundColor: 'red'}]}
                />
              </View>
              <View style={{flex: 1}}>
                <AppText font = 'sub1' style = {styles.libraryBlogCount}>{`${props.countBlog} Blog(s)`}</AppText>
                <AppText numberOfLines={1} font = 'h3' style={app_sp.mt_12} onPress={() => alert('Library Blog')}>{props.title}</AppText>
                <AppText font= 'body1'>{props.des}</AppText>
                <View style= {styles.libraryArchiveAuthor}>
                  <View style={styles.libraryArchiveBlockImageAuthor}>
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
            </View>
            <View style = {styles.libraryGroupBtn}>
              <IconButton
                size={16}
                icon = {() => <Ionicons size={16} name="bookmark-outline" />}
                onPress = {() => {
                  alert('chức năng 1')
                }}
              />
              <IconButton 
                size={16}
                icon = {() => <Ionicons size={16} name = "remove-outline" />}
                onPress = {onToggleSnackBar}
              />
              <IconButton 
                size={16}
                icon={() => <Ionicons size={16} name="ellipsis-horizontal" />}
                onPress = {() => {
                  alert('chức năng 3')
                }}
              />
            </View>
          </View>
        </View>
  )
}

export default LibraryArchiveScreen;