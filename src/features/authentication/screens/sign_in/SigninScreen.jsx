import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { Button, TextInput, useTheme } from 'react-native-paper'

import styles from './SigninScreenStyles'
import AppText from 'share/components/app_text/AppText'
import app_sp from 'styles/spacing'

import { NavigationProps, ScreenProps } from 'share/types/index.d'

/**
 * Đây là screen Sign in
 * @param {NavigationProps & ScreenProps} props - Props của component.
 * @returns 
 */
export default function SigninScreen({
  route,
  navigation,
  appNavigation
}) {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background } ]}>
        <View style={styles.td}>
          <AppText style={styles.text} font='h1' color={theme.colors.onBackground}>Wellcome Back</AppText>
          <AppText style={[styles.text, {width: "60%"}]} font='body3' color={theme.colors.onBackground} >Sharing your story, knowledge, tips, experience with others</AppText>
        </View>
        <View style={[app_sp.mt_22, { width: "100%" }]}>
          <TextInput mode="outlined" style={styles.input} />
          <TextInput mode="outlined" style={styles.input}
             />

        </View>
        <View style={[app_sp.mt_22]}>
          <Button mode="contained" onPress={() => appNavigation.navigate("Main")}><AppText>Sign in</AppText></Button>
        </View>
        <View style={[app_sp.mt_12]}>
          <AppText toScreen={{ screenName: 'Main' }} color={theme.colors.primary} font="body3" weight="bolder">Continue as Guest</AppText>
        </View>

        <View style={[app_sp.mt_22]}>
          <AppText>Or continue with</AppText>
        </View>

        <View style={[app_sp.mt_22, styles.bt_logo]}>
          <TouchableOpacity>
            <Image
              style={styles.logo}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/124/124010.png',
              }}
            />
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Image
              style={styles.logo}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeSBM2BaOZkKTRh7m6tz9Y4iCeizEztZtcHQ&usqp=CAU',
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={[app_sp.mt_22, styles.fl_gu]}>
          <AppText font="body3">Don't have an account?</AppText>
          <AppText toScreen={{ screenName: 'SignupScreen' }} color={theme.colors.primary} font="body3" weight="bolder">Sign up</AppText>
        </View>
      </View> 
  )
}