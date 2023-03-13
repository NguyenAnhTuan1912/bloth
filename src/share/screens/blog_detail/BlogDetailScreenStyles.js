import { StyleSheet } from 'react-native'

import app_sp from 'styles/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    ...app_sp.pv_12,
    ...app_sp.ph_18
  },

  bd_row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default styles