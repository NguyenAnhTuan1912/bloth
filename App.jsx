import * as React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeContext } from 'share/contexts/ThemeContext';

import { useFonts } from 'expo-font';

import AppNavigator from 'AppNavigator';
import BlothTheme from 'styles/theme';
import CustomStatusBar from 'share/components/custom_status_bar/CustomStatusBar';
import SplashScreen from 'share/screens/SplashScreen';
import AppText from 'share/components/app_text/AppText';

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

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);
  const [theme, setTheme] = React.useState('dark');

  // C??i n??y hi???n t???i ch??a c?? t??c d???ng g??, l?? b???i t d??ng ????? track xem l?? theme ?????i xong ch??a.
  // Tuy nhi??n th?? theme n?? ?????i r???i (kh??ng g??y block UI), nh??ng t???i m v???n th???y ch???m l?? do component n?? render l???i.
  // => Set theme v?? component render l???i l?? 2 ?????t execution kh?? nhau.
  // Nh??ng t v???n ????? t???m n?? ??? ????y.
  const [isPending, startTransition] = React.useTransition();

  const setCurrentTheme = (theme) => {
    startTransition(() => {
      console.log("Start Transition");
      setTheme(theme);
    });
  }

  console.log("isPending: ", isPending)

  console.log("Font loaded: ", fontsLoaded);

  if(!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
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

          { isPending && <SplashScreen /> }

        </View>
      </ThemeContext.Provider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});