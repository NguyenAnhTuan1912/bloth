import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import React from 'react'

import AsyncStorageUltility from 'utilities/async_store'
import AuthUtility from 'utilities/authentication'
import JWTUlitity from 'utilities/jwt'
import AxiosUtility from 'utilities/axios'

import {
  updatePasswordAsync
} from 'api'

import { useTheme, Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { useRole, useUser } from 'share/hooks/useUserSlice'
import { useLoading, useNotification } from 'share/hooks/useManifoldSlice'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import AppText from 'share/components/app_text/AppText'

import styles from '../../styles/AuthenticationStyles'
import app_sp from 'styles/spacing'

/*
  Màn hình này sẽ giúp cho người dùng thay đổi mật khẩu ngoài ra thì giúp người dùng lấy lại mật khẩu
  khi họ đã quên.
*/

/**
 * Screen này sẽ hiển thị ra màn hình tìm lại mật khẩu cho người dùng.
 * @returns 
 */
const UpdatePasswordScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { user, userDispatcher } = useUser();
  const { userRole, userRoleDispatcher } = useRole();
  const { loadingDispatcher } = useLoading();
  const { notificationDispatcher } = useNotification();

  const [updatePasswordState, setUpdatePasswordState] = React.useState({
    password: "",
    confirmPassord: "",
    hidePassword: true,
    hideConfirmPassword: true,
  });
  const [inputsError, setInputsError] = React.useState({
    hasAnyError: true,
    passwordError: undefined,
    confirmPassordError: undefined
  });

  const inputPasswordRef = React.useRef(null);
  const inputConfirmPasswordRef = React.useRef(null);

  const handleCancelUpdatePassword = async () => {
    let idToken = await AsyncStorageUltility.getValue(AsyncStorageUltility.ID_TOKEN_KEY);
    if(user._id !== "" && idToken && userRole === "") {
      userRoleDispatcher.updateUserRole(user.activedEmail ? "ACTIVED_ACCOUNT" : "NON_ACTIVED_ACCOUNT");
    } else navigation.navigate("SigninScreen");
  }

  const handleUpdatePassword = async () => {
    try {
      if(inputsError.hasAnyError) return;
      let accessToken = await AsyncStorageUltility.getValue(AsyncStorageUltility.ACCESS_TOKEN_KEY);
      let verifyResult = JWTUlitity.isTokenExpired(accessToken);
      if(verifyResult) throw new Error("You're not allowed in this action.");

      console.log("New password: ", updatePasswordState.password);
      console.log("Confirm new password: ", updatePasswordState.confirmPassord);
      loadingDispatcher.updateIsLoading(true);
      console.log("USER: ", user);
      let updatePasswordRes = await updatePasswordAsync(user.email, updatePasswordState.password);
      console.log("UPDATE PASSWORD RES: ", updatePasswordRes.data)
      userDispatcher.updateUserDetails({});
      notificationDispatcher.show("Your password has been changed.", "Update Password", "success");
    } catch (error) {
      let errorData = AxiosUtility.getErrorResponse(error);
      notificationDispatcher.show(errorData.message, "Update Password", "error");
    } finally {
      loadingDispatcher.updateIsLoading(false);
      inputPasswordRef.current.clear();
      inputConfirmPasswordRef.current.clear();
      if(userRole === "") {
        await AsyncStorageUltility.remove(AsyncStorageUltility.ACCESS_TOKEN_KEY);
        let accessToken = await AsyncStorageUltility.getValue(AsyncStorageUltility.ACCESS_TOKEN_KEY);
      }
      navigation.navigate("SigninScreen");
    }
  }

  return (
    <KeyboardAwareScrollView
      style={{flex: 1, backgroundColor: theme.colors.background}}
      contentContainerStyle={[{flex: 1}]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enableOnAndroid={true}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container, {backgroundColor: theme.colors.background, justifyContent: 'center', alignItems: 'flex-start'}]}>
          <AppText font="h0">Change your secret</AppText>
          <AppText>Shh... you need to be alone!</AppText>
          <View style={[styles.input_container, app_sp.mb_22]}>
            <TextInput
              ref={inputPasswordRef}
              secureTextEntry={updatePasswordState.hidePassword}
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
                    setUpdatePasswordState({...updatePasswordState, hidePassword: !updatePasswordState.hidePassword })
                  }}
                  icon={updatePasswordState.hidePassword ? "eye" : "eye-off"}
                />
              }
              onEndEditing={e =>
                AuthUtility.verifyInput(AuthUtility.PASSWORD_RULE,
                  (text) => {
                    console.log("Email: ", text);
                    setUpdatePasswordState({...updatePasswordState, password: text})
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
              ref={inputConfirmPasswordRef}
              secureTextEntry={updatePasswordState.hideConfirmPassword}
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
                    setUpdatePasswordState({...updatePasswordState, hideConfirmPassword: !updatePasswordState.hideConfirmPassword })
                  }}
                  icon={updatePasswordState.hideConfirmPassword ? "eye" : "eye-off"}
                />
              }
              onEndEditing={e => {
                if(e.nativeEvent.text === updatePasswordState.password) {
                  setUpdatePasswordState({...updatePasswordState, confirmPassord: e.nativeEvent.text})
                  setInputsError({...inputsError, hasAnyError: false, confirmPassordError: undefined})
                } else {
                  setInputsError({...inputsError, hasAnyError: true, confirmPassordError: "Xác nhận mật khẩu không thành công."})
                }
                }}
            />
            {inputsError.confirmPassordError && <AppText font="body2" style={styles.text_error}>{inputsError.confirmPassordError}</AppText>}
          </View>
          <View
            style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}
          >
            <Button
              mode="text"
              style={app_sp.me_12}
              onPress={handleCancelUpdatePassword}
            >
              Cancel
            </Button>
            <Button
              mode="contained-tonal"
              onPress={handleUpdatePassword}
            >
              Change password
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}

export default UpdatePasswordScreen