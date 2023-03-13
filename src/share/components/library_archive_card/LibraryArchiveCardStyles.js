import { StyleSheet } from "react-native";

import app_sp from "styles/spacing";
import app_c from "styles/colors";
import app_sh from "styles/shape";

const styles = StyleSheet.create ({
  libcard_container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...app_sp.ph_18,
    ...app_sp.pv_12
  },

  libcard_container_col: {
    flex: 1,
    alignItems: 'flex-start'
  },

  libcard_container_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  libcard_image: {
    width: '60%',
    aspectRatio: 1,
    backgroundColor: `rgb(${app_c.RGB.ext_third})`,
    ...app_sh.rounded_8
  },

  libcard_content_container: {
    flex: 2,
    width: '100%',
    ...app_sp.ms_12,
  },

  libcard_author_info_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    ...app_sp.mb_6
  },

  libcard_content_button_container: {
    flex: 1, width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    ...app_sp.mt_12,
  },

  ske_bg: {
    backgroundColor: `rgb(${app_c.RGB.ext_third})`,
  },

  ske_button: {
    minWidth: 24,
    ...app_sh.circle
  }
 })

 export default styles;