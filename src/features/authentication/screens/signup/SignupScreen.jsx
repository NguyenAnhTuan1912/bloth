import { ScrollView, View, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform } from 'react-native'
import React from 'react'
import { RouteProp, ParamListBase, NavigationProp } from '@react-navigation/native'

import { Button, useTheme, TextInput  } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Picker } from '@react-native-picker/picker'
import AppText from 'share/components/app_text/AppText'
import app_sp from 'styles/spacing'

import styles from './SignupScreenStyles'
import app_sh from 'styles/shape'

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
  const [signUpState, setSignUpState] = React.useState({
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassord: "",
    dateOfBirth: new Date(),
    career: "student",
    hidePassword: true,
    hideConfirmPassword: true,
  });

  const handleSignUp = (e) => {
    console.log("Email: ", signUpState.email);
    console.log("First Name: ", signUpState.firstName);
    console.log("Last Name: ", signUpState.lastName);
    console.log("Career: ", signUpState.career);
    console.log("Date of birth: ", signUpState.dateOfBirth);
    console.log("Username: ", signUpState.userName);
    console.log("Password: ", signUpState.password);
    console.log("Confirm password: ", signUpState.confirmPassord);
  }

  return (
    <KeyboardAwareScrollView style={[ { backgroundColor: theme.colors.background }]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={[ { backgroundColor: theme.colors.background }]}>
          <View style={[styles.container, app_sp.pv_18]}>
            <View style={{ width: "100%" }}>
              <AppText font='h4' color={theme.colors.onBackground}>Hello new friend!</AppText>
              <AppText font='sub1'>Let's know about you</AppText>
            </View>
            <View style={[app_sp.mt_22, { width: "100%" }]}>
              <AppText font='h4' color={theme.colors.onBackground}>Basic Information</AppText>
            </View>
            <View style={[app_sp.mt_10, { width: "100%" }]}>
              <TextInput
                numberOfLines={1}
                mode="outlined" 
                style={styles.input} 
                label={"E-mail"}
                left={
                  <TextInput.Icon
                    icon="mail"
                  />
                }
                onChangeText={(text) => setSignUpState({...signUpState, email: text})}
              />
            </View>
            <View style={[app_sp.mt_10, { width: "100%" }, styles.lf_name]}>
              <TextInput mode="outlined" style={styles.input_48per} label="First name" />
              <TextInput mode="outlined" style={styles.input_48per} label="Last name" />
            </View>
            <View style={[app_sp.mt_10, { width: "100%" }]}>
              <AppText style={app_sp.me_12}>Your current career: </AppText>
              <Picker
                mode="dropdown"
                selectionColor={theme.colors.primary}
                selectedValue={signUpState.career}
                itemStyle={{color: theme.colors.primary}}
                onValueChange={(itemValue, itemIndex) =>
                  setSignUpState({...signUpState, career: itemValue})
                }
              >
                <Picker.Item label="Student" value="student" />
                <Picker.Item label="Developer" value="developer" />
                <Picker.Item label="Writer" value="writer" />
                <Picker.Item label="Teacher" value="teacher" />
                <Picker.Item label="Designer" value="designer" />
                <Picker.Item label="Engineer" value="engineer" />
                <Picker.Item label="Doctor" value="doctor" />
              </Picker>
            </View>
            <View style={[app_sp.mt_10, { width: "100%", flexDirection: 'row', alignItems: 'center' }]}>
                <AppText style={app_sp.me_12}>Date of birth: </AppText>
                <DateTimePicker
                  textColor={theme.colors.primary}
                  accentColor={theme.colors.primary}
                  value={signUpState.dateOfBirth}
                  dateFormat="longdate"
                  onChange={(e) => setSignUpState({...signUpState, dateOfBirth: new Date(e.nativeEvent.timestamp)})}
                />
            </View>

            <View style={[app_sp.mt_22, { width: "100%" }]}>
              <AppText font='h4' color={theme.colors.onBackground}>Identical Information</AppText>
            </View>
            <View style={[app_sp.mt_10, { width: "100%" }]}>
              <TextInput 
                mode="outlined" 
                style={styles.input} 
                label={"Username"}
                left={
                  <TextInput.Icon
                    icon="account"
                  />
                }
              />
              <TextInput
                secureTextEntry={signUpState.hidePassword}
                mode="outlined"
                style={[styles.input, app_sp.mt_10]} 
                label={"Password"}
                left={
                  <TextInput.Icon
                    icon="lock"
                  />
                }
                right={
                  <TextInput.Icon 
                    onPress={() => {
                      setSignUpState({...signUpState, hidePassword: !signUpState.hidePassword })
                    }}
                    icon={signUpState.hidePassword ? "eye" : "eye-off"}
                  />
                }
              />
              <TextInput
                secureTextEntry={signUpState.hideConfirmPassword}
                mode="outlined" 
                style={[styles.input, app_sp.mt_10]} 
                label={"Confirm password"}
                left={
                  <TextInput.Icon
                    icon="lock"
                  />
                }
                right={
                  <TextInput.Icon 
                    onPress={() => {
                      setSignUpState({...signUpState, hideConfirmPassword: !signUpState.hideConfirmPassword })
                    }}
                    icon={signUpState.hideConfirmPassword ? "eye" : "eye-off"}
                  />
                }
              />
            </View>
            <View style={[app_sp.mt_22, { width: "100%" }]}>
              <Button
                mode="contained-tonal"
                onPress={handleSignUp}
                style={[app_sh.rounded_8, { width: "100%" }]}
              >Sign in</Button>
            </View>
            <View style={[app_sp.mt_22, styles.fl_gu]}>
              <AppText font="body3">Don't have an account?</AppText>
              <AppText toScreen={{ screenName: 'SigninScreen' }} color={theme.colors.primary} font="body3" weight="bolder">Sign in</AppText>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}