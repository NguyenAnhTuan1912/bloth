import { StyleSheet } from 'react-native'

// Tuan: Trong file này không có color. Color thì tự custom sau.
// Tuan: Và cái này có thể thay đổi cho phù hợp. Hiện tại type chỉ đang là test thôi.
const APP_FONT_SIZE_12 = 12
const APP_FONT_SIZE_14 = 14
const APP_FONT_SIZE_16 = 16
const APP_FONT_SIZE_18 = 18
const APP_FONT_SIZE_20 = 20
const APP_FONT_SIZE_24 = 24
const APP_FONT_SIZE_30 = 30

const APP_FONT_DECORATION_DASED = 'dashed'
const APP_FONT_DECORATION_DOTTED = 'dotted'
const APP_FONT_DECORATION_DOUBLE = 'double'
const APP_FONT_DECORATION_SOLID = 'solid'

const size = StyleSheet.create({
  sz_12: {
    fontSize: APP_FONT_SIZE_12
  },
  sz_14: {
    fontSize: APP_FONT_SIZE_14
  },
  sz_16: {
    fontSize: APP_FONT_SIZE_16
  },
  sz_18: {
    fontSize: APP_FONT_SIZE_18
  },
  sz_20: {
    fontSize: APP_FONT_SIZE_20
  },
  sz_24: {
    fontSize: APP_FONT_SIZE_24
  },
  sz_30: {
    fontSize: APP_FONT_SIZE_30
  },
})

const decoration = StyleSheet.create({
  deco_dashed: {
    textDecorationStyle: APP_FONT_DECORATION_DASED
  },
  deco_dotted: {
    textDecorationStyle: APP_FONT_DECORATION_DOTTED
  },
  deco_double: {
    textDecorationStyle: APP_FONT_DECORATION_DOUBLE
  },
  deco_solid: {
    textDecorationStyle: APP_FONT_DECORATION_SOLID
  }
})

const fontFamilys = {
  Montserrat: {
    Black: "Montserrat-Black",
    BlackItalic: "Montserrat-BlackItalic",
    Bold: "Montserrat-Bold",
    BoldItalic: "Montserrat-BoldItalic",
    ExtraBold: "Montserrat-ExtraBold",
    ExtraBoldItalic: "Montserrat-ExtraBoldItalic",
    ExtraLight: "Montserrat-ExtraLight",
    ExtraLightItalic: "Montserrat-ExtraLightItalic",
    Italic: "Montserrat-Italic",
    Light: "Montserrat-Light",
    LightItalic: "Montserrat-LightItalic",
    Medium: "Montserrat-Medium",
    MediumItalic: "Montserrat-MediumItalic",
    Regular: "Montserrat-Regular",
    SemiBold: "Montserrat-SemiBold",
    SemiBoldItalic: "Montserrat-SemiBoldItalic",
    Thin: "Montserrat-Thin",
    ThinItalic: "Montserrat-ThinItalic"
  },
  SourceSerifPro: {
    Black: "Black",
    BlackItalic: "BlackItalic",
    Bold: "Bold",
    BoldItalic: "BoldItalic",
    ExtraLight: "ExtraLight",
    ExtraLightItalic: "ExtraLightItalic",
    Italic: "Italic",
    Light: "Light",
    LightItalic: "LightItalic",
    Regular: "Regular",
    SemiBold: "SemiBold",
    SemiBoldItalic: "SemiBoldItalic",
  }
}

const fonts = {
  Montserrat: {
    normal: {
      bolder: {
        // Title
        h0: { fontFamily: "Montserrat-Black", fontSize: APP_FONT_SIZE_30},
        h1: { fontFamily: "Montserrat-Black", fontSize: APP_FONT_SIZE_24},
        h2: { fontFamily: "Montserrat-Black", fontSize: APP_FONT_SIZE_20},
        h3: { fontFamily: "Montserrat-Black", fontSize: APP_FONT_SIZE_18},
        h4: { fontFamily: "Montserrat-Black", fontSize: APP_FONT_SIZE_16},
        h5: { fontFamily: "Montserrat-Black", fontSize: APP_FONT_SIZE_14},
    
        // Body
        body0: { fontFamily: "Montserrat-Medium", fontSize: APP_FONT_SIZE_16},
        body1: { fontFamily: "Montserrat-Medium", fontSize: APP_FONT_SIZE_14},
        body2: { fontFamily: "Montserrat-Medium", fontSize: APP_FONT_SIZE_12},
    
        // Sub
        sub0: { fontFamily: "Montserrat-Regular", fontSize: APP_FONT_SIZE_14},
        sub1: { fontFamily: "Montserrat-Regular", fontSize: APP_FONT_SIZE_12},
      },
    
      normal: {
        // Title
        h0: { fontFamily: "Montserrat-Bold", fontSize: APP_FONT_SIZE_30},
        h1: { fontFamily: "Montserrat-Bold", fontSize: APP_FONT_SIZE_24},
        h2: { fontFamily: "Montserrat-Bold", fontSize: APP_FONT_SIZE_20},
        h3: { fontFamily: "Montserrat-Bold", fontSize: APP_FONT_SIZE_18},
        h4: { fontFamily: "Montserrat-Bold", fontSize: APP_FONT_SIZE_16},
        h5: { fontFamily: "Montserrat-Bold", fontSize: APP_FONT_SIZE_14},
    
        // Body
        body0: { fontFamily: "Montserrat-Regular", fontSize: APP_FONT_SIZE_16},
        body1: { fontFamily: "Montserrat-Regular", fontSize: APP_FONT_SIZE_14},
        body2: { fontFamily: "Montserrat-Regular", fontSize: APP_FONT_SIZE_12},
    
        // Sub
        sub0: { fontFamily: "Montserrat-Light", fontSize: APP_FONT_SIZE_14},
        sub1: { fontFamily: "Montserrat-Light", fontSize: APP_FONT_SIZE_12},
      },
    
      lighter: {
        // Title
        h0: { fontFamily: "Montserrat-Medium", fontSize: APP_FONT_SIZE_30},
        h1: { fontFamily: "Montserrat-Medium", fontSize: APP_FONT_SIZE_24},
        h2: { fontFamily: "Montserrat-Medium", fontSize: APP_FONT_SIZE_20},
        h3: { fontFamily: "Montserrat-Medium", fontSize: APP_FONT_SIZE_18},
        h4: { fontFamily: "Montserrat-Medium", fontSize: APP_FONT_SIZE_16},
        h5: { fontFamily: "Montserrat-Medium", fontSize: APP_FONT_SIZE_14},
    
        // Body
        body0: { fontFamily: "Montserrat-Light", fontSize: APP_FONT_SIZE_16},
        body1: { fontFamily: "Montserrat-Light", fontSize: APP_FONT_SIZE_14},
        body2: { fontFamily: "Montserrat-Light", fontSize: APP_FONT_SIZE_12},
    
        // Sub
        sub0: { fontFamily: "Montserrat-Thin", fontSize: APP_FONT_SIZE_14},
        sub1: { fontFamily: "Montserrat-Thin", fontSize: APP_FONT_SIZE_12},
      }
    },
  
    italic: {
      bolder: {
        // Title
        h0: { fontFamily: "Montserrat-BlackItalic", fontSize: APP_FONT_SIZE_30},
        h1: { fontFamily: "Montserrat-BlackItalic", fontSize: APP_FONT_SIZE_24},
        h2: { fontFamily: "Montserrat-BlackItalic", fontSize: APP_FONT_SIZE_20},
        h3: { fontFamily: "Montserrat-BlackItalic", fontSize: APP_FONT_SIZE_18},
        h4: { fontFamily: "Montserrat-BlackItalic", fontSize: APP_FONT_SIZE_16},
        h5: { fontFamily: "Montserrat-BlackItalic", fontSize: APP_FONT_SIZE_14},
    
        // Body
        body0: { fontFamily: "Montserrat-MediumItalic", fontSize: APP_FONT_SIZE_16},
        body1: { fontFamily: "Montserrat-MediumItalic", fontSize: APP_FONT_SIZE_14},
        body2: { fontFamily: "Montserrat-MediumItalic", fontSize: APP_FONT_SIZE_12},
    
        // Sub
        sub0: { fontFamily: "Montserrat-Italic", fontSize: APP_FONT_SIZE_14},
        sub1: { fontFamily: "Montserrat-Italic", fontSize: APP_FONT_SIZE_12},
      },
    
      normal: {
        // Title
        h0: { fontFamily: "Montserrat-BoldItalic", fontSize: APP_FONT_SIZE_30},
        h1: { fontFamily: "Montserrat-BoldItalic", fontSize: APP_FONT_SIZE_24},
        h2: { fontFamily: "Montserrat-BoldItalic", fontSize: APP_FONT_SIZE_20},
        h3: { fontFamily: "Montserrat-BoldItalic", fontSize: APP_FONT_SIZE_18},
        h4: { fontFamily: "Montserrat-BoldItalic", fontSize: APP_FONT_SIZE_16},
        h5: { fontFamily: "Montserrat-BoldItalic", fontSize: APP_FONT_SIZE_14},
    
        // Body
        body0: { fontFamily: "Montserrat-Italic", fontSize: APP_FONT_SIZE_16},
        body1: { fontFamily: "Montserrat-Italic", fontSize: APP_FONT_SIZE_14},
        body2: { fontFamily: "Montserrat-Italic", fontSize: APP_FONT_SIZE_12},
    
        // Sub
        sub0: { fontFamily: "Montserrat-LightItalic", fontSize: APP_FONT_SIZE_14},
        sub1: { fontFamily: "Montserrat-LightItalic", fontSize: APP_FONT_SIZE_12},
      },
    
      lighter: {
        // Title
        h0: { fontFamily: "Montserrat-MediumItalic", fontSize: APP_FONT_SIZE_30},
        h1: { fontFamily: "Montserrat-MediumItalic", fontSize: APP_FONT_SIZE_24},
        h2: { fontFamily: "Montserrat-MediumItalic", fontSize: APP_FONT_SIZE_20},
        h3: { fontFamily: "Montserrat-MediumItalic", fontSize: APP_FONT_SIZE_18},
        h4: { fontFamily: "Montserrat-MediumItalic", fontSize: APP_FONT_SIZE_16},
        h5: { fontFamily: "Montserrat-MediumItalic", fontSize: APP_FONT_SIZE_14},
    
        // Body
        body0: { fontFamily: "Montserrat-LightItalic", fontSize: APP_FONT_SIZE_16},
        body1: { fontFamily: "Montserrat-LightItalic", fontSize: APP_FONT_SIZE_14},
        body2: { fontFamily: "Montserrat-LightItalic", fontSize: APP_FONT_SIZE_12},
    
        // Sub
        sub0: { fontFamily: "Montserrat-ThinItalic", fontSize: APP_FONT_SIZE_14},
        sub1: { fontFamily: "Montserrat-ThinItalic", fontSize: APP_FONT_SIZE_12},
      }
    }
  },
  SourceSerifPro: {
    normal: {
      bolder: {
         // Title
         h0: { fontFamily: "SourceSerifPro-Black", fontSize: APP_FONT_SIZE_30},
         h1: { fontFamily: "SourceSerifPro-Black", fontSize: APP_FONT_SIZE_24},
         h2: { fontFamily: "SourceSerifPro-Black", fontSize: APP_FONT_SIZE_20},
         h3: { fontFamily: "SourceSerifPro-Black", fontSize: APP_FONT_SIZE_18},
         h4: { fontFamily: "SourceSerifPro-Black", fontSize: APP_FONT_SIZE_16},
         h5: { fontFamily: "SourceSerifPro-Black", fontSize: APP_FONT_SIZE_14},
     
         // Body
         body0: { fontFamily: "SourceSerifPro-SemiBold", fontSize: APP_FONT_SIZE_16},
         body1: { fontFamily: "SourceSerifPro-SemiBold", fontSize: APP_FONT_SIZE_14},
         body2: { fontFamily: "SourceSerifPro-SemiBold", fontSize: APP_FONT_SIZE_12},
     
         // Sub
         sub0: { fontFamily: "SourceSerifPro-Regular", fontSize: APP_FONT_SIZE_14},
         sub1: { fontFamily: "SourceSerifPro-Regular", fontSize: APP_FONT_SIZE_12},
      },

      normal: {
        // Title
        h0: { fontFamily: "SourceSerifPro-Bold", fontSize: APP_FONT_SIZE_30},
        h1: { fontFamily: "SourceSerifPro-Bold", fontSize: APP_FONT_SIZE_24},
        h2: { fontFamily: "SourceSerifPro-Bold", fontSize: APP_FONT_SIZE_20},
        h3: { fontFamily: "SourceSerifPro-Bold", fontSize: APP_FONT_SIZE_18},
        h4: { fontFamily: "SourceSerifPro-Bold", fontSize: APP_FONT_SIZE_16},
        h5: { fontFamily: "SourceSerifPro-Bold", fontSize: APP_FONT_SIZE_14},
    
        // Body
        body0: { fontFamily: "SourceSerifPro-Regular", fontSize: APP_FONT_SIZE_16},
        body1: { fontFamily: "SourceSerifPro-Regular", fontSize: APP_FONT_SIZE_14},
        body2: { fontFamily: "SourceSerifPro-Regular", fontSize: APP_FONT_SIZE_12},
    
        // Sub
        sub0: { fontFamily: "SourceSerifPro-Light", fontSize: APP_FONT_SIZE_14},
        sub1: { fontFamily: "SourceSerifPro-Light", fontSize: APP_FONT_SIZE_12},
      },

      lighter: {
        // Title
        h0: { fontFamily: "SourceSerifPro-SemiBold", fontSize: APP_FONT_SIZE_30},
        h1: { fontFamily: "SourceSerifPro-SemiBold", fontSize: APP_FONT_SIZE_24},
        h2: { fontFamily: "SourceSerifPro-SemiBold", fontSize: APP_FONT_SIZE_20},
        h3: { fontFamily: "SourceSerifPro-SemiBold", fontSize: APP_FONT_SIZE_18},
        h4: { fontFamily: "SourceSerifPro-SemiBold", fontSize: APP_FONT_SIZE_16},
        h5: { fontFamily: "SourceSerifPro-SemiBold", fontSize: APP_FONT_SIZE_14},
    
        // Body
        body0: { fontFamily: "SourceSerifPro-Light", fontSize: APP_FONT_SIZE_16},
        body1: { fontFamily: "SourceSerifPro-Light", fontSize: APP_FONT_SIZE_14},
        body2: { fontFamily: "SourceSerifPro-Light", fontSize: APP_FONT_SIZE_12},
    
        // Sub
        sub0: { fontFamily: "SourceSerifPro-ExtraLight", fontSize: APP_FONT_SIZE_14},
        sub1: { fontFamily: "SourceSerifPro-ExtraLight", fontSize: APP_FONT_SIZE_12},
      }
    },
    italic: {
      bolder: {
        // Title
        h0: { fontFamily: "SourceSerifPro-BlackItalic", fontSize: APP_FONT_SIZE_30},
        h1: { fontFamily: "SourceSerifPro-BlackItalic", fontSize: APP_FONT_SIZE_24},
        h2: { fontFamily: "SourceSerifPro-BlackItalic", fontSize: APP_FONT_SIZE_20},
        h3: { fontFamily: "SourceSerifPro-BlackItalic", fontSize: APP_FONT_SIZE_18},
        h4: { fontFamily: "SourceSerifPro-BlackItalic", fontSize: APP_FONT_SIZE_16},
        h5: { fontFamily: "SourceSerifPro-BlackItalic", fontSize: APP_FONT_SIZE_14},
    
        // Body
        body0: { fontFamily: "SourceSerifPro-SemiBoldItalic", fontSize: APP_FONT_SIZE_16},
        body1: { fontFamily: "SourceSerifPro-SemiBoldItalic", fontSize: APP_FONT_SIZE_14},
        body2: { fontFamily: "SourceSerifPro-SemiBoldItalic", fontSize: APP_FONT_SIZE_12},
    
        // Sub
        sub0: { fontFamily: "SourceSerifPro-Italic", fontSize: APP_FONT_SIZE_14},
        sub1: { fontFamily: "SourceSerifPro-Italic", fontSize: APP_FONT_SIZE_12},
     },

     normal: {
       // Title
       h0: { fontFamily: "SourceSerifPro-BoldItalic", fontSize: APP_FONT_SIZE_30},
       h1: { fontFamily: "SourceSerifPro-BoldItalic", fontSize: APP_FONT_SIZE_24},
       h2: { fontFamily: "SourceSerifPro-BoldItalic", fontSize: APP_FONT_SIZE_20},
       h3: { fontFamily: "SourceSerifPro-BoldItalic", fontSize: APP_FONT_SIZE_18},
       h4: { fontFamily: "SourceSerifPro-BoldItalic", fontSize: APP_FONT_SIZE_16},
       h5: { fontFamily: "SourceSerifPro-BoldItalic", fontSize: APP_FONT_SIZE_14},
   
       // Body
       body0: { fontFamily: "SourceSerifPro-Italic", fontSize: APP_FONT_SIZE_16},
       body1: { fontFamily: "SourceSerifPro-Italic", fontSize: APP_FONT_SIZE_14},
       body2: { fontFamily: "SourceSerifPro-Italic", fontSize: APP_FONT_SIZE_12},
   
       // Sub
       sub0: { fontFamily: "SourceSerifPro-LightItalic", fontSize: APP_FONT_SIZE_14},
       sub1: { fontFamily: "SourceSerifPro-LightItalic", fontSize: APP_FONT_SIZE_12},
     },

     lighter: {
       // Title
       h0: { fontFamily: "SourceSerifPro-SemiBoldItalic", fontSize: APP_FONT_SIZE_30},
       h1: { fontFamily: "SourceSerifPro-SemiBoldItalic", fontSize: APP_FONT_SIZE_24},
       h2: { fontFamily: "SourceSerifPro-SemiBoldItalic", fontSize: APP_FONT_SIZE_20},
       h3: { fontFamily: "SourceSerifPro-SemiBoldItalic", fontSize: APP_FONT_SIZE_18},
       h4: { fontFamily: "SourceSerifPro-SemiBoldItalic", fontSize: APP_FONT_SIZE_16},
       h5: { fontFamily: "SourceSerifPro-SemiBoldItalic", fontSize: APP_FONT_SIZE_14},
   
       // Body
       body0: { fontFamily: "SourceSerifPro-LightItalic", fontSize: APP_FONT_SIZE_16},
       body1: { fontFamily: "SourceSerifPro-LightItalic", fontSize: APP_FONT_SIZE_14},
       body2: { fontFamily: "SourceSerifPro-LightItalic", fontSize: APP_FONT_SIZE_12},
   
       // Sub
       sub0: { fontFamily: "SourceSerifPro-ExtraLightItalic", fontSize: APP_FONT_SIZE_14},
       sub1: { fontFamily: "SourceSerifPro-ExtraLightItalic", fontSize: APP_FONT_SIZE_12},
     }
    }
  }
}

const app_typo = {
  size,
  decoration,
  fonts,
  fontFamilys
}


export default app_typo