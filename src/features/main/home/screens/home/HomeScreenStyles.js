import { StyleSheet } from 'react-native'
import app_sp from 'styles/spacing';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }, 
  homeTitleHeader: {
    fontSize: 32, 
    lineHeight: 39, 
    marginBottom: 61,
    ...app_sp.mh_18,
    ...app_sp.mt_12,
  }
});

export default styles