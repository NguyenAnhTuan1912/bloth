import { ScrollView, View, } from 'react-native'
import React from 'react'
import { RouteProp, ParamListBase, NavigationProp } from '@react-navigation/native'

import styles from './SignupScreenStyles'
import { Button, useTheme, TextInput  } from 'react-native-paper'
import AppText from 'share/components/app_text/AppText'
import app_sp from 'styles/spacing'

import { NavigationProps, ScreenProps } from 'share/types/index.d'

/**
 * Đây là screen Sign up
 * @param {NavigationProps & ScreenProps} props - Props của component.
 * @returns 
 */
export default function SignupScreen({
  route,
  navigation,
  appNavigation
}) {

  const theme = useTheme();
  return (
    <ScrollView style={[ { backgroundColor: theme.colors.background }]}>
    <View style={[styles.container, { backgroundColor: theme.colors.background } ]}>
      <View style={[app_sp.mt_22, { width: "100%" }]}>
        <AppText font='h4' color={theme.colors.onBackground}>Hello new friend!</AppText>
        <AppText font='sub1'>Let we know about you</AppText>
      </View>
      <View style={[app_sp.mt_22, { width: "100%" }]}>
        <AppText font='h4' color={theme.colors.onBackground}>Basic Information</AppText>
      </View>
      <View style={[app_sp.mt_10, { width: "100%" }]}>
        <TextInput mode="outlined" style={styles.input_up} />
      </View>
      <View style={[app_sp.mt_10, { width: "100%" }, styles.lf_name]}>
        <TextInput mode="outlined" style={styles.input_up1} />
        <TextInput mode="outlined" style={styles.input_up1} />
      </View>
      <View style={[app_sp.mt_10, { width: "100%" }]}>
        <TextInput mode="outlined" style={styles.input_date} />
        
      </View>

      <View style={[app_sp.mt_22, { width: "100%" }]}>
        <AppText font='h4' color={theme.colors.onBackground}>Identical Information</AppText>
      </View>
      <View style={[app_sp.mt_10, { width: "100%" }]}>
        <TextInput mode="outlined" style={styles.input_up} />
        <TextInput mode="outlined" style={styles.input_up} />
        <TextInput mode="outlined" style={styles.input_up} />
      </View>
      <Button onPress={() => navigation.navigate("SigninScreen")}>Go to Sign in</Button>
    </View>
    </ScrollView>
  )
}