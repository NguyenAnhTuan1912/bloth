import { StyleSheet } from "react-native"

import app_sp from "styles/spacing";
import app_c from "styles/colors";
import app_dms from "styles/dimension";

const styles = StyleSheet.create({
  slider_container: {
    flex: 1,
    width: '100%'
  },

  slider_button_container: {
    flexGrow: 0,
    flexDirection: 'row',
    ...app_sp.mb_12
  },

  line_index: {
    width: '100%',
    height: 1
  },

  slide_container: {
    flex: 1,
    flexGrow: 1
  }
});

export default styles