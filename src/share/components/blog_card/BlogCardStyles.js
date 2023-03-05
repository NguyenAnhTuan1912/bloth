import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
  blog : {
    height: 164,
    borderBottomWidth: 1,
    borderColor:'rgba(38, 38, 38, 0.5)',
  },
  blogList : {
    marginLeft:18,
    marginTop: 14, 
    paddingBottom: 12
  },
  blogUser : {
    flexDirection: 'row',
    alignItems: 'center', 
    left:88
  },
  blogUserName : {
    fontFamily: 'Montserrat', 
    fontStyle: 'normal', 
    fontWeight: '400', 
    fontSize: 14, 
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
      fontFamily: 'Montserrat',
      fontStyle:'normal', 
      fontWeight: '700', 
      fontSize:14, 
      lineHeight: 17, 
      color: '#262626'
    }, 
    blogTimeUp : {
      fontFamily: 'Montserrat',
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
      marginTop:6,
      marginRight: 18
    },
    btnBlog : {
      backgroundColor:'#FFFFFF',
      borderStyle: 'solid',
      borderColor: '#262626', 
      borderWidth: 1, 
    }   
 })

 export default styles;