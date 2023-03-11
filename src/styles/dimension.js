import { Dimensions, Platform } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const app_dms = {
  screenHeight,
  screenWidth
}

export default app_dms;