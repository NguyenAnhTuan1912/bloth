import * as React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Provider as PaperProvider, Snackbar } from 'react-native-paper';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { store } from 'app_redux/store';

import { ThemeContext } from 'share/contexts/ThemeContext';
import { useFonts } from 'expo-font';


import * as SplashScreen from 'expo-splash-screen';
import AppNavigator from 'AppNavigator';
import BlothTheme from 'styles/theme';
import CustomStatusBar from 'share/components/custom_status_bar/CustomStatusBar';
import GlobalLoading from 'share/components/loading/GlobalLoading';
import Nofitication from 'share/components/notification/Nofitication';

import { configureStyleOfFTTS } from 'libs/mark-format/react-native';

// Cofig custom fonts cho app.
// Hiện tại thì có 2 fonts: Montserrat và SourceSerifPro.
// Montserrat dùng làm font chữ thường.
// SourceSerifPro dùng làm font cho title của blog.
const customFonts = {
  'Montserrat-Black': require('./assets/fonts/montserrat/Montserrat-Black.ttf'),
    'Montserrat-BlackItalic': require('./assets/fonts/montserrat/Montserrat-BlackItalic.ttf'),
    'Montserrat-Bold': require('./assets/fonts/montserrat/Montserrat-Bold.ttf'),
    'Montserrat-BoldItalic': require('./assets/fonts/montserrat/Montserrat-BoldItalic.ttf'),
    'Montserrat-ExtraBold': require('./assets/fonts/montserrat/Montserrat-ExtraBold.ttf'),
    'Montserrat-ExtraBoldItalic': require('./assets/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf'),
    'Montserrat-ExtraLight': require('./assets/fonts/montserrat/Montserrat-ExtraLight.ttf'),
    'Montserrat-ExtraLightItalic': require('./assets/fonts/montserrat/Montserrat-ExtraLightItalic.ttf'),
    'Montserrat-Light': require('./assets/fonts/montserrat/Montserrat-Light.ttf'),
    'Montserrat-LightItalic': require('./assets/fonts/montserrat/Montserrat-LightItalic.ttf'),
    'Montserrat-Italic': require('./assets/fonts/montserrat/Montserrat-Italic.ttf'),
    'Montserrat-Medium': require('./assets/fonts/montserrat/Montserrat-Medium.ttf'),
    'Montserrat-MediumItalic': require('./assets/fonts/montserrat/Montserrat-MediumItalic.ttf'),
    'Montserrat-Regular': require('./assets/fonts/montserrat/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/montserrat/Montserrat-SemiBold.ttf'),
    'Montserrat-SemiBoldItalic': require('./assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf'),
    'Montserrat-Thin': require('./assets/fonts/montserrat/Montserrat-Thin.ttf'),
    'Montserrat-ThinItalic': require('./assets/fonts/montserrat/Montserrat-ThinItalic.ttf'),
    
    'SourceSerifPro-Black': require('./assets/fonts/source_serif_pro/SourceSerifPro-Black.ttf'),
    'SourceSerifPro-BlackItalic': require('./assets/fonts/source_serif_pro/SourceSerifPro-BlackItalic.ttf'),
    'SourceSerifPro-Bold': require('./assets/fonts/source_serif_pro/SourceSerifPro-Bold.ttf'),
    'SourceSerifPro-BoldItalic': require('./assets/fonts/source_serif_pro/SourceSerifPro-BoldItalic.ttf'),
    'SourceSerifPro-ExtraLight': require('./assets/fonts/source_serif_pro/SourceSerifPro-ExtraLight.ttf'),
    'SourceSerifPro-ExtraLightItalic': require('./assets/fonts/source_serif_pro/SourceSerifPro-ExtraLightItalic.ttf'),
    'SourceSerifPro-Italic': require('./assets/fonts/source_serif_pro/SourceSerifPro-Italic.ttf'),
    'SourceSerifPro-Light': require('./assets/fonts/source_serif_pro/SourceSerifPro-Light.ttf'),
    'SourceSerifPro-LightItalic': require('./assets/fonts/source_serif_pro/SourceSerifPro-LightItalic.ttf'),
    'SourceSerifPro-Regular': require('./assets/fonts/source_serif_pro/SourceSerifPro-Regular.ttf'),
    'SourceSerifPro-SemiBold': require('./assets/fonts/source_serif_pro/SourceSerifPro-SemiBold.ttf'),
    'SourceSerifPro-SemiBoldItalic': require('./assets/fonts/source_serif_pro/SourceSerifPro-SemiBoldItalic.ttf')
}

import app_typo from 'styles/typography'
import app_sp from 'styles/spacing';

const customStyles = {
  "BOLD": {
    fontFamily: "Montserrat-Bold",
    fontWeight: "bold"
  },
  "ITALIC": {
    fontFamily: "Montserrat-Italic",
    fontStyle: "italic"
  },
  "BOLD&ITALIC": {
    fontFamily: "Montserrat-BoldItalic"
  },
  "LIGHT&ITALIC": {
    fontFamily: "Montserrat-LightItalic"
  },
  "HIGHLIGHT": {
    color: "#191c1d",
    paddingVertical: 4,
    paddingHorizontal: 2,
    backgroundColor: 'yellow'
  },
  "IMAGE": {
    width: "100%",
    aspectRatio: 16 / 9,
    ...app_sp.mt_12
  },
  "HEADING_0": { ...app_typo.fonts.SourceSerifPro.normal.normal.h0 },
  "HEADING_1": { ...app_typo.fonts.SourceSerifPro.normal.normal.h1 },
  "HEADING_2": { ...app_typo.fonts.Montserrat.normal.normal.h2 },
  "HEADING_3": { ...app_typo.fonts.Montserrat.normal.normal.h3 },
  "HEADING_4": { ...app_typo.fonts.Montserrat.normal.normal.h4 },
  "HEADING_5": { ...app_typo.fonts.Montserrat.normal.normal.h5 },
  "SUB_0": { ...app_typo.fonts.Montserrat.normal.normal.sub0 },
  "SUB_1": { ...app_typo.fonts.Montserrat.normal.normal.sub1 },
}

configureStyleOfFTTS(customStyles);

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);
  const [theme, setTheme] = React.useState('dark');

  console.log("Font loaded: ", fontsLoaded);

  if(!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={BlothTheme[theme]}>
        <ThemeContext.Provider value={{ currentTheme: theme, setCurrentTheme: setTheme }}>
          <View style={styles.container}>
            <CustomStatusBar
              theme={theme}
              platform={Platform.OS}
              backgroundColor={BlothTheme[theme].colors.background}
            />

            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>

            <GlobalLoading />
            <Nofitication />

          </View>
        </ThemeContext.Provider>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  global_loading: {
    position: 'absolute',
    flex: 1,
    top: 0,

  }
});