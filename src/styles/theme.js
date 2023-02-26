import { configureFonts, DefaultTheme } from "react-native-paper"
import app_c from "./colors"
import app_typo from "./typography"

const fontConfig = {
  ios: {
    black: {
      fontFamily: app_typo.fontFamilys.Montserrat.Black
    }
  },
  android: {
    black: {
      fontFamily: app_typo.fontFamilys.Montserrat.Black
    }
  }
}

const light = {
  ...DefaultTheme,
  "colors": {
    "primary": "#bd0042",
    "onPrimary": "#ffffff",
    "primaryContainer": "#ffd9dc",
    "onPrimaryContainer": "#400010",
    "secondary": "#ad2e45",
    "onSecondary": "#ffffff",
    "secondaryContainer": "#ffdadb",
    "onSecondaryContainer": "#40000f",
    "tertiary": "#006874",
    "onTertiary": "#ffffff",
    "tertiaryContainer": "#97f0ff",
    "onTertiaryContainer": "#001f24",
    "error": "#c00100",
    "errorContainer": "#ffdad4",
    "onError": "#ffffff",
    "onErrorContainer": "#410000",
    "background": "#fafdfd",
    "onBackground": "#191c1d",
    "surface": "#fafdfd",
    "onSurface": "#191c1d",
    "surfaceVariant": "#dbe4e6",
    "onSurfaceVariant": "#3f484a",
    "outline": "#6f797a",
    "inverseOnSurface": "#eff1f1",
    "inverseSurface": "#2e3132",
    "inversePrimary": "#ffb2ba",
    "shadow": "#000000",
    "surfaceTint": "#bd0042",
    "outlineVariant": "#bfc8ca",
    "scrim": "#000000"
  }
}

const dark = {
  ...DefaultTheme,
  colors: {
    "primary": "#ffb2ba",
    "onPrimary": "#670020",
    "primaryContainer": "#910030",
    "onPrimaryContainer": "#ffd9dc",
    "secondary": "#ffb2b8",
    "onSecondary": "#67001d",
    "secondaryContainer": "#8c132f",
    "onSecondaryContainer": "#ffdadb",
    "tertiary": "#4fd8eb",
    "onTertiary": "#00363d",
    "tertiaryContainer": "#004f58",
    "onTertiaryContainer": "#97f0ff",
    "error": "#ffb4a8",
    "errorContainer": "#930100",
    "onError": "#690100",
    "onErrorContainer": "#ffdad4",
    "background": "#191c1d",
    "onBackground": "#e1e3e3",
    "surface": "#191c1d",
    "onSurface": "#c4c7c7",
    "surfaceVariant": "#3f484a",
    "onSurfaceVariant": "#bfc8ca",
    "outline": "#899294",
    "inverseOnSurface": "#191c1d",
    "inverseSurface": "#e1e3e3",
    "inversePrimary": "#bd0042",
    "shadow": "#000000",
    "surfaceTint": "#ffb2ba",
    "outlineVariant": "#3f484a",
    "scrim": "#000000"
  }
}

const BlothTheme = {
  light,
  dark
}

export default BlothTheme