import { Dimensions, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
  },
  user: {
    width: '100%', 
    height: 180
  }, 
  userInfo : {
    marginTop: 12,
    marginLeft: 18
  }, 
  userName : {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 24,
    color :'#262626',
    lineHeight:29
  },
  userCaption : {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 12,
    color :'#262626',
    position:'absolute',
    top: 28,
    lineHeight: 15
  },
  profileBtn : {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop : 24
  },
  statBtn : {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 12,
    width: 146,
    backgroundColor : '#262626',
    borderRadius: 8,
    height: 41, 
    color: '#FFFFFF'
  }, 
  editBtn : {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 12,
    width: 146,
    borderRadius: 8,
    height: 41
  },
  settingIcon : {
    borderWidth: 1,
    borderRadius: 8,
    height: 41, 
    width:41,
    margin: 0
  },

  // introduction
  aboutUs : {
    borderTopWidth: 1,
     borderColor:'rgba(38, 38, 38, 0.5)',
  },
  listaboutUs : {
    marginLeft:18,
    height: 223,
     marginRight: 18
  },
  aboutTitle  : {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '700',
    marginTop: 12,
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 6
  }, 
  aboutCaption : {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
  },
  linkItem : {
    flexDirection:'row',
    alignItems: 'center',
    padding: 2,
  },
  linkIcon : {
    color: '#fff',
    
  },

  // blogs
  myBlog : {
    borderTopWidth: 1,
    borderColor:'rgba(38, 38, 38, 0.5)'
  },
  blogHeader : {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 18, 
    height: 44,
    lineHeight: 44,
  }
});

export default styles