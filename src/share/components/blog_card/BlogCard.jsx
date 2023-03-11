import styles from './BlogCardStyles'
import { View, Image, Text } from 'react-native';
import AppText from '../app_text/AppText';
import {  Avatar, IconButton} from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'


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
                <AppText font='sub1' style = {styles.blogUserName}>{props.userName}</AppText>
              </View >
              <View style= {styles.blogItem}>
                <Image 
                source={{
                  uri : props.image
                  }}
                  style = {styles.blogImage}
                />
                <View style ={{ marginRight: 103}}>
                  <Text numberOfLines={3} ellipsizeMode = 'tail'>
                    <AppText font='h1' style= {styles.blogTitle} onPress={() => (
                      alert('blog detail')
                    )} >{props.title}
                    </AppText>
                  </Text>
                  <AppText font='sub1' style ={styles.blogTimeUp}>{props.time}</AppText>
                </View>
              </View>
              <View style = {styles.btnGroupBlog}>
              <IconButton 
                        icon = {() => <Ionicons name="bookmark-outline" />} 
                          size={11}
                          style= {{borderColor: '#262626', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}
                          onPress = {() => {
                            alert('chức năng 1')
                          }}
                        />
                        <IconButton 
                        icon = {() => <Ionicons name = "remove-outline" />}
                          size={11}
                          style= {{borderColor: '#262626', borderWidth: 1, justifyContent: 'center'}}
                          onPress = {() => {
                            alert('chức năng 2')
                          }}
                        />
                        <IconButton 
                          icon={() => <Ionicons name="ellipsis-horizontal" />}
                          size={11}
                          style= {{borderColor: '#262626', borderWidth: 1, justifyContent: 'center'}}
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