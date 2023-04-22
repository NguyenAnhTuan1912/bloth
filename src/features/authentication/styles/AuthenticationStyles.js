import { StyleSheet } from "react-native";

import app_sh from "styles/shape";
import app_sp from "styles/spacing";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    ...app_sp.p_18
  },

  input_container: {
    width: '100%',
  },

  input_48per_container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  text_error: {
    width: '100%',
    color: 'red',
    ...app_sp.mt_8
  },

  input: {
    width: '100%',
    ...app_sh.rounded_8
  },

  input_48per: {
    width: "48%"
  },

  introduction: {
    width: "100%",
    justifyContent: 'center',
    alignItems: "center",
  },

  logo: {
    width: 45,
    height: 45,
  },

  bt_logo: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  bt_question: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  border: {
    borderWidth: 1,
    ...app_sh.rounded_8
  },
  
  row: {
    flexDirection: 'row'
  }
});

export default styles;