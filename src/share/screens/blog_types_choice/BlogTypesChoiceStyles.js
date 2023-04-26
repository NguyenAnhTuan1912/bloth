import { StyleSheet } from 'react-native'

import app_sp from 'styles/spacing';

const styles = StyleSheet.create({
  container: {

  },

  chip_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    ...app_sp.p_18
  }
});

export default styles