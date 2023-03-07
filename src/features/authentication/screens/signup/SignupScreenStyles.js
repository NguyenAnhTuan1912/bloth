import { StyleSheet } from 'react-native'
import app_sh from 'styles/shape';
import app_sp from 'styles/spacing';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    ...app_sp.ph_18
  },
  input_up: {
    height: 40,
    width: '100%',
    marginTop: 5,
    padding: 5,
    ...app_sh.rounded_8
  }, 

  lf_name: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  input_up1:{
    height: 40,
    width: '48%',
    marginTop: 5,
    padding: 5,
    ...app_sh.rounded_8
  },

  input_date:{
    height: 40,
    width: '70%',
    marginTop: 5,
    padding: 5,
    ...app_sh.rounded_8
  }
});

export default styles