import { StyleSheet } from "react-native";
import app_sp from "styles/spacing";

const styles = StyleSheet.create ({
  blog : {
    borderBottomWidth: .25
  },
  blogList : {
    ...app_sp.ph_18,
    ...app_sp.pv_12
  },
  blogUser : {
    flexDirection: 'row',
    alignItems: 'center', 
    left:88
  },
  blogUserName : {
     // fontFamily: 'Montserrat', 
    color: '#262626', 
    lineHeight: 15,
    marginLeft: 5
  },
  blogItem : {
      flexDirection: 'row',
      marginTop: 13
    }, 
    blogImage : {
      borderRadius: 8,
      height: 70, 
      width: 70, 
      marginRight: 18
    },
    blogTitle : {
      // fontFamily: 'Montserrat',
      fontSize:14, 
      lineHeight: 17, 
      color: '#262626',
    }, 
    blogTimeUp : {
      // fontFamily: 'Montserrat',
      fontStyle:'normal', 
      fontWeight: '400', 
      fontSize:  12, 
      lineHeight: 12,
      marginTop: 6, 
      color: '#262626'
    }, 
    btnGroupBlog : {
      flexDirection:'row',
      justifyContent: 'flex-end',
      ...app_sp.mt_6
    },
    btnBlog : {
      backgroundColor:'#FFFFFF',
      borderStyle: 'solid',
      borderColor: '#262626', 
      borderWidth: 1, 
    }   
 })

 export default styles;