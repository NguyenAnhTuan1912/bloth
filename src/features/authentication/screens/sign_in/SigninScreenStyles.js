import { StyleSheet } from 'react-native'
import app_sh from 'styles/shape';
import app_sp from 'styles/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    ...app_sp.ph_18,
    paddingBottom: 18,
  },

  td: {
    justifyContent: 'center',
    alignItems: "center",
    width: "100%",
  },

  text: {
    textAlign:'center',
  },

  input: {
    width: '100%',
    ...app_sh.rounded_8
  },

  fl_gu: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  logo: {
    width: 45,
    height: 45,
  },

  bt_logo: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
  
});

export default styles