import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import React, { useRef } from 'react'

import AsyncStorageUltility from 'utilities/async_store'
import AuthUtility from 'utilities/authentication'
 import AxiosUtility from 'utilities/axios'

import {
  forgotPasswordAsync,
  authorizeAsync
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
  Khi mà người dùng chưa đăng nhập nhưng họ muốn thay đổi mật khẩu thì màn hình này sẽ hiển thị lên.
*/

/**
 * Screen này sẽ hiển thị ô nhập email để cho định danh người dùng, từ đó mới có thể
 * cập nhật password được.
 * @returns 
 */
const ForgotPasswordScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { loadingDispatcher } = useLoading();
  const { notificationDispatcher } = useNotification();
  const { userDispatcher } = useUser();

  const [forgotPasswordState, setForgotPasswordState] = React.useState({
    email: "",
    verificationCode: "",
    isUserFound: false,
  });
  const [inputsError, setInputsError] = React.useState({
    hasAnyError: true,
    emailError: undefined,
  });

  const inputRef = React.useRef(null);

  const handleCancelForgotPassword = async () => {
    inputRef.current.clear();
    if(forgotPasswordState.isUserFound) {
      setForgotPasswordState({...forgotPasswordState, verificationCode: "", isUserFound: false})
      return;
    }
    setInputsError({...inputsError, hasAnyError: true, emailError: undefined})
    navigation.navigate("SigninScreen");
  }

  const handleForgotPassword = async () => {
    try {
      if(inputsError.hasAnyError) return;

      loadingDispatcher.updateIsLoading(true);
      let forgotPasswordRes = await forgotPasswordAsync(forgotPasswordState.email);
      loadingDispatcher.updateIsLoading(false);

      notificationDispatcher.show(forgotPasswordRes.data.message, "You're a member of Bloth", "success");
      setForgotPasswordState({...forgotPasswordState, isUserFound: true});
    } catch (error) {
      let errorData = AxiosUtility.getErrorResponse(error);
      notificationDispatcher.show(errorData.message, "Forgot Password", "error");
    } finally {
      loadingDispatcher.updateIsLoading(false);
      inputRef.current.clear();
    }
  }

  const handleHandinVerificationCode = async () => {
    try {
      if(!forgotPasswordState.isUserFound && !forgotPasswordState.verificationCode) return;

      loadingDispatcher.updateIsLoading(true);
      let authorizeRes = await authorizeAsync("VERIFICATION_CODE", forgotPasswordState.verificationCode);
      loadingDispatcher.updateIsLoading(false);

      let accessToken = authorizeRes.data.data.accessToken;
      let addAccessTokenResult = await AsyncStorageUltility.setValue(AsyncStorageUltility.ACCESS_TOKEN_KEY, accessToken);
      notificationDispatcher.show("We know you!", "Verify", "success");
      userDispatcher.updateUserDetails({email: forgotPasswordState.email});
      navigation.navigate("UpdatePasswordScreen");
      setForgotPasswordState({...forgotPasswordState, verificationCode: "", isUserFound: false})
    } catch (error) {
      setForgotPasswordState({...forgotPasswordState, verificationCode: ""})
      let errorData = AxiosUtility.getErrorResponse(error);
      notificationDispatcher.show(errorData.message, "Verify", "error");
    } finally {
      loadingDispatcher.updateIsLoading(false);
      inputRef.current.clear();
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
          {
            forgotPasswordState.isUserFound ? (
              <>
                <AppText font="h0">You're a member of Bloth</AppText>
                <AppText>Check your e-mail for the code.</AppText>
              </>
            ) : (
              <>
                <AppText font="h0">Let we know you first</AppText>
                <AppText>Fill your e-mail address in the blank.</AppText>
              </>
            )
          }
          <View style={[styles.input_container, app_sp.mb_22]}>
            {
              forgotPasswordState.isUserFound ? (
                  <TextInput
                    ref={inputRef}
                    mode="outlined"
                    style={[styles.input, app_sp.mt_10]} 
                    label={"Verification Code"}
                    onEndEditing={e => setForgotPasswordState({...forgotPasswordState, verificationCode: e.nativeEvent.text})}
                  />
              ) : (
                <>
                  <TextInput
                    ref={inputRef}
                    mode="outlined"
                    style={[styles.input, app_sp.mt_10]} 
                    label={"Email"}
                    left={
                      <TextInput.Icon
                        icon="email"
                      />
                    }
                    onEndEditing={e =>
                      AuthUtility.verifyInput(AuthUtility.EMAIL_RULE,
                        (text) => {
                          console.log("Email: ", text);
                          setForgotPasswordState({...forgotPasswordState, email: text})
                          setInputsError({...inputsError, hasAnyError: false, emailError: undefined})
                        },
                        () => {
                          setInputsError({...inputsError, hasAnyError: true, emailError: "Email không hợp lệ :("})
                        },
                      )(e.nativeEvent.text)
                    }
                  />
                  {inputsError.emailError && <AppText font="body2" style={styles.text_error}>{inputsError.emailError}</AppText>}
                </>
              )
            }
          </View>
          <View
            style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}
          >
            <Button
              mode="text"
              style={app_sp.me_12}
              onPress={handleCancelForgotPassword}
            >
              Cancel
            </Button>
            <Button
              mode="contained-tonal"
              onPress={forgotPasswordState.isUserFound ? handleHandinVerificationCode : handleForgotPassword}
            >
              {
                forgotPasswordState.isUserFound ? "Hand in" : "Find me"
              }
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}

export default ForgotPasswordScreen