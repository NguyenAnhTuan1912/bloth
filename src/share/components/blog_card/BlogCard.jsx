import styles from './BlogCardStyles'
import { View, Image } from 'react-native';
import AppText from '../app_text/AppText';
import {  Avatar, IconButton, MD3Colors} from 'react-native-paper'

function BlogCard(props) {
    return ( 
        <View style = {styles.blog}>
          <View style = {styles.blogList}>
              <View style= {styles.blogUser}>
                <Avatar.Image 
                    source={{
                    uri : props.image
                    }}
                    size = {18}
                />
                <AppText style = {styles.blogUserName}>{props.userName}</AppText>
              </View >
              <View style= {styles.blogItem}>
                <Image 
                source={{
                  uri : props.image
                  }}
                  style = {styles.blogImage}
                />
                <View style ={{ marginRight: 103}}>
                  <AppText style= {styles.blogTitle} onPress={() => (
                    alert('blog detail')
                  )} >{props.title}</AppText>
                  <AppText style ={styles.blogTimeUp}>{props.time}</AppText>
                </View>
              </View>
              <View style = {styles.btnGroupBlog}>
                    <IconButton 
                      size={11}
                      style= {styles.btnBlog}
                      onPress = {() => {
                        alert('chức năng 1')
                      }}
                    />
                    <IconButton 
                      size={11}
                      style= {styles.btnBlog}
                      onPress = {() => {
                        alert('chức năng 2')
                      }}
                    />
                    <IconButton 
                      size={11}
                      style= {styles.btnBlog}
                      onPress = {() => {
                        alert('chức năng 3')
                      }}
                    />
              </View>
          </View>
        </View >
     );
}
export default BlogCard;