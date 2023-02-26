import { StyleSheet } from "react-native"

import { HEADER_HEIGHT } from "utilities/constants";
import app_c from "styles/colors";
import app_sp from "styles/spacing";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: HEADER_HEIGHT,
    border: 'none',
    ...app_sp.ph_18
  },

  header_col: {
    flex: 1,
    flexDirection: 'row',
  }
});

export default styles