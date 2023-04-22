import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  Alert
} from 'react-native'
import React from 'react'
import { RouteProp, ParamListBase, NavigationProp, useNavigation } from '@react-navigation/native'

import { signUpAsync } from 'api'

import AxiosUtility from 'utilities/axios'
import AuthUtility from 'utilities/authentication'

import { useLoading, useNotification } from 'share/hooks/useManifoldSlice'

import { Button, useTheme, TextInput  } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Picker } from '@react-native-picker/picker'
import AppText from 'share/components/app_text/AppText'

import styles from '../../styles/AuthenticationStyles'
import app_sp from 'styles/spacing'
import app_sh from 'styles/shape'

import { NavigationProps, ScreenProps } from 'share/types/index.d'

/**
 * Đây là screen Sign up
 * @param {NavigationProps & ScreenProps} props - Props của component.
 * @returns 
 */
export default function SignupScreen() {
  const theme = useTheme();
  const { loadingDispatcher } = useLoading();
  const { notificationDispatcher } = useNotification();
  const navigation = useNavigation();

  const [signUpState, setSignUpState] = React.useState({
    email: "",
    bio: "",
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
  const [inputsError, setInputsError] = React.useState({
    hasAnyError: true,
    emailError: undefined,
    nameError: undefined,
    userError: undefined,
    passwordError: undefined,
    confirmPassordError: undefined
  });

  const handleSignUp = async (e) => {
    try {
      // console.log("Email: ", signUpState.email);
      // console.log("First Name: ", signUpState.firstName);
      // console.log("Last Name: ", signUpState.lastName);
      // console.log("Bio: ", signUpState.bio);
      // console.log("Career: ", signUpState.career);
      // console.log("Date of birth: ", signUpState.dateOfBirth);
      // console.log("Username: ", signUpState.userName);
      // console.log("Password: ", signUpState.password);
      // console.log("Confirm password: ", signUpState.confirmPassord);
      if(inputsError.hasAnyError) return;
      if(
        ! signUpState.email
        || ! signUpState.firstName
        || ! signUpState.lastName
        || ! signUpState.userName
        || ! signUpState.password
        || ! signUpState.confirmPassord
      ) return;
      let dateNow = new Date();
      let dateOfBirth = new Date(signUpState.dateOfBirth);
      if(dateNow.getFullYear() - dateOfBirth.getFullYear() <= 16) return;
      loadingDispatcher.updateIsLoading(true);
      

      const newUserData = {
        email: signUpState.email,
        firstName: signUpState.firstName,
        lastName: signUpState.lastName,
        bio: signUpState.bio,
        dateOfBirth: signUpState.dateOfBirth,
        username: signUpState.userName,
        password: signUpState.password,
        career: signUpState.career
      }

      let signUpRes = await signUpAsync(newUserData);
      loadingDispatcher.updateIsLoading(false);
      navigation.navigate("SigninScreen");
      // Alert.alert(
      //   "Đăng nhập",
      //   "Bạn đã đăng ký thành công, vui lòng hoàn thành bước xác minh tài khoản!"
      // );
      notificationDispatcher.show("You sign up successfully. Please check your e-mail and active your account!", "Sign up", "success");
    } catch (error) {
      loadingDispatcher.updateIsLoading(false);
      let errorData = AxiosUtility.getErrorResponse(error);
      // Alert.alert(
      //   "Đăng nhập",
      //   errorData.message
      // );
      notificationDispatcher.show(errorData.message, "Sign up", "error");
    }
  }

  return (
    <KeyboardAwareScrollView 
      style={{flex: 1, backgroundColor: theme.colors.background}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enableOnAndroid={true}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
          <View style={{ width: "100%" }}>
            <AppText font='h4' color={theme.colors.onBackground}>Hello new friend!</AppText>
            <AppText font='sub1'>Let we know about you</AppText>
          </View>
          <View style={[app_sp.mt_22, app_sp.mb_12, styles.input_container]}>
            <AppText font='h4' color={theme.colors.onBackground}>Basic Information</AppText>
          </View>

          {/* Email input */}
          <View style={[app_sp.mb_12, styles.input_container]}>
            <TextInput
              keyboardType="email-address"
              mode="outlined" 
              style={styles.input} 
              label={"E-mail"}
              onEndEditing={e =>
                AuthUtility.verifyInput(AuthUtility.EMAIL_RULE,
                  (text) => {
                    setSignUpState({...signUpState, email: text})
                    setInputsError({...inputsError, hasAnyError: false, emailError: undefined})
                  },
                  () => {
                    setInputsError({...inputsError, hasAnyError: true, emailError: "E-mail không hợp lệ :("})
                  },
                )(e.nativeEvent.text)
              }
              left={
                <TextInput.Icon
                  icon="mail"
                />
              }
            />
            {inputsError.emailError && <AppText font="body2" style={styles.text_error}>{inputsError.emailError}</AppText>}
          </View>

          {/* Name input (First name and last name) */}
          <View style={[styles.input_48per_container, inputsError.nameError ? {} : app_sp.mb_12]}>
            <TextInput
              mode="outlined"
              style={styles.input_48per}
              label="First name"
              onEndEditing={e =>
                AuthUtility.verifyInput(AuthUtility.NAME_RULE,
                  (text) => {
                    setSignUpState({...signUpState, firstName: text})
                    setInputsError({...inputsError, hasAnyError: false, nameError: undefined})
                  },
                  () => {
                    setInputsError({...inputsError, hasAnyError: true, nameError: AuthUtility.NAME_RULE_ERROR_MESSAGE})
                  },
                )(e.nativeEvent.text)
              }
            />
            <TextInput
              mode="outlined"
              style={styles.input_48per}
              label="Last name"
              onEndEditing={e =>
                AuthUtility.verifyInput(AuthUtility.NAME_RULE,
                  (text) => {
                    setSignUpState({...signUpState, lastName: text})
                    setInputsError({...inputsError, hasAnyError: false, nameError: undefined})
                  },
                  () => {
                    setInputsError({...inputsError, hasAnyError: true, nameError: AuthUtility.NAME_RULE_ERROR_MESSAGE})
                  },
                )(e.nativeEvent.text)
              }
            />
          </View>
          {inputsError.nameError && <AppText font="body2" style={styles.text_error}>{inputsError.nameError}</AppText>}

          {/* Bio input */}
          <View style={[app_sp.mb_12, { width: "100%" }]}>
            <TextInput
              multiline
              mode="outlined" 
              style={styles.input} 
              label={"Introduce yourself"}
              placeholder="Your bio"
              onEndEditing={e => setSignUpState({...signUpState, bio: e.nativeEvent.text})}
            />
          </View>

          {/* Career picker */}
          <View style={[app_sp.mb_12, { width: "100%" }]}>
            <AppText style={app_sp.mb_12}>Your current career: </AppText>
            <Picker
              style={[{borderColor: theme.colors.outline}, styles.border]}
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

          {/* Date of birth picker */}
          <View style={[app_sp.mb_12, styles.input_container]}>
              <AppText style={app_sp.mb_12}>Date of birth: </AppText>
              <DateTimePicker
                mode="date"
                style={{alignSelf: 'flex-start'}}
                accentColor={theme.colors.primary}
                value={signUpState.dateOfBirth}
                onChange={(e) => setSignUpState({...signUpState, dateOfBirth: new Date(e.nativeEvent.timestamp)})}
              />
          </View>

          <View style={[app_sp.mt_22, { width: "100%" }]}>
            <AppText font='h4' color={theme.colors.onBackground}>Identical Information</AppText>
          </View>
          
          {/* Authentication information inputs (Username, password, confirm password) */}
          <View style={[app_sp.mt_10, styles.input_container]}>
            <TextInput 
              mode="outlined" 
              style={styles.input} 
              label={"Username"}
              left={
                <TextInput.Icon
                  icon="account"
                />
              }
              onEndEditing={e =>
                AuthUtility.verifyInput(AuthUtility.USERNAME_RULE,
                  (text) => {
                    setSignUpState({...signUpState, userName: text})
                    setInputsError({...inputsError, hasAnyError: false, userError: undefined})
                  },
                  () => {
                    setInputsError({...inputsError, hasAnyError: true, userError: AuthUtility.USERNAME_RULE_ERROR_MESSAGE})
                  },
                )(e.nativeEvent.text)
              }
            />
            {inputsError.userError && <AppText font="body2" style={styles.text_error}>{inputsError.userError}</AppText>}
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
              onEndEditing={e =>
                AuthUtility.verifyInput(AuthUtility.PASSWORD_RULE,
                  (text) => {
                    console.log("Email: ", text);
                    setSignUpState({...signUpState, password: text})
                    setInputsError({...inputsError, hasAnyError: false, passwordError: undefined})
                  },
                  () => {
                    setInputsError({...inputsError, hasAnyError: true, passwordError: AuthUtility.PASSWORD_RULE_ERROR_MESSAGE})
                  },
                )(e.nativeEvent.text)
              }
            />
            {inputsError.passwordError && <AppText font="body2" style={styles.text_error}>{inputsError.passwordError}</AppText>}
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
              onEndEditing={e => {
                if(e.nativeEvent.text === signUpState.password) {
                  setSignUpState({...signUpState, confirmPassord: e.nativeEvent.text})
                  setInputsError({...inputsError, hasAnyError: false, confirmPassordError: undefined})
                } else {
                  setInputsError({...inputsError, hasAnyError: true, confirmPassordError: "Xác nhận mật khẩu không thành công."})
                }
                }}
            />
            {inputsError.confirmPassordError && <AppText font="body2" style={styles.text_error}>{inputsError.confirmPassordError}</AppText>}
          </View>

          <View style={[app_sp.mt_22, { width: "100%" }]}>
            <Button
              mode="contained-tonal"
              onPress={handleSignUp}
              style={[app_sh.rounded_8, { width: "100%" }]}
            >Sign up</Button>
          </View>

          <View style={[app_sp.mt_22, styles.bt_question]}>
            <AppText font="body3">You already have an account?</AppText>
            <AppText toScreen={{ screenName: 'SigninScreen' }} color={theme.colors.primary} font="body3" weight="bolder">Sign in</AppText>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}