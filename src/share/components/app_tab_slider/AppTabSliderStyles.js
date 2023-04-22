import { StyleSheet } from "react-native"

import app_sp from "styles/spacing";
import app_c from "styles/colors";

const styles = StyleSheet.create({
  slider_container: {
    flex: 1,
    width: "100%"
  },

  slider_button_container: {
    flexGrow: 0,
    flexDirection: 'row',
    ...app_sp.mb_12
  },

  line_index: {
    width: '100%',
    height: 1,
    backgroundColor: app_c.HEX.fourth
  },

  slide_container: {
    flex: 1,
    flexGrow: 1,
    ...app_sp.mt_18
  },

  slide: {
    position: "relative",
    width: "100%",
    height: "100%",
    opacity: 0,
    zIndex: -1,
    top: 0,
    left: 0
  },

  slide_show: {
    position: "absolute",
    opacity: 1,
    zIndex: 1
  }
});

export default styles