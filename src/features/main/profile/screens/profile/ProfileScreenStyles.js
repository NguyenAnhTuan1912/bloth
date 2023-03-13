import { Dimensions, StyleSheet } from 'react-native'
import app_sh from 'styles/shape';
import app_sp from 'styles/spacing';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
  },
  user: {
    width: '100%',
    ...app_sp.pv_12,
    ...app_sp.ph_18
  }, 
  userInfo : {
    
  }, 
  userName : {
    // fontFamily: 'Montserrat',
    fontSize: 24,
    color :'#262626',
    lineHeight:29
  },
  userCaption : {
    // fontFamily: 'Montserrat',
    fontSize: 12,
    color :'#262626',
    position:'absolute',
    top: 28,
    lineHeight: 15
  },
  profileBtn : {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...app_sp.mt_12
  },
  userBtn : {
    ...app_sh.rounded_8
  },
  settingIcon : {
    borderWidth: 1,
    aspectRatio: 1,
    ...app_sh.rounded_8
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
    // fontFamily: 'Montserrat',
    marginTop: 12,
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 6
  }, 
  aboutCaption : {
    // fontFamily: 'Montserrat',
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
  blogHeader : {
    // fontFamily: 'Montserrat',
    fontSize: 16,
    marginLeft: 18, 
    height: 44,
    lineHeight: 44,
  }
});

export default styles