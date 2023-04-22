import {
  Text,
  View,
  ScrollView,
  Image, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Keyboard,
  Alert
} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { 
  updateUserRole,
  updateUserDetails,
  userRoleSeletor,
  USER_ROLES
} from 'app_redux/user/userSlice';
import { signInAsync } from 'api'

import { useNavigation } from '@react-navigation/native';

import { useRole, useUser } from 'share/hooks/useUserSlice';
import { useLoading, useNotification } from 'share/hooks/useManifoldSlice';

import JWTUlitity from 'utilities/jwt';
import AxiosUtility from 'utilities/axios';
import AuthUtility from 'utilities/authentication';
import AsyncStorageUltility from 'utilities/async_store';

import AsyncStorage from '@react-native-async-storage/async-storage'

import { Avatar, Button, IconButton, TextInput, useTheme } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import AppText from 'share/components/app_text/AppText'

import styles from '../../styles/AuthenticationStyles'
import app_sp from 'styles/spacing'
import app_sh from 'styles/shape'
import app_dms from 'styles/dimension';

import { NavigationProps, ScreenProps } from 'share/types/index.d'

/**
 * Đây là screen Sign in
 * @param {NavigationProps & ScreenProps} props - Props của component.
 * @returns 
 */
export default function SigninScreen() {
  const theme = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { userRole, userRoleDispatcher } = useRole();
  const { user, userDispatcher } = useUser();
  const { loading, loadingDispatcher } = useLoading();
  const { notificationDispatcher } = useNotification();

  const [signInState, setSignInState] = React.useState({
    hidePassword: true,
    user: "",
    password: "",
    idToken: "",
    accessToken: "",
    refreshToken: "",
    isLoginSuccessfully: false
  });
  const [inputsError, setInputsError] = React.useState({
    userError: undefined,
    passwordError: undefined,
    hasAnyError: true
  });

  // const updateAfterLoginSuccess = async () => {
  //   let addTokensPromises = [
  //     AsyncStorageUltility.setItem(AsyncStorageUltility.ID_TOKEN_KEY, JSON.stringify(signInState.idToken)),
  //     AsyncStorageUltility.setItem(AsyncStorageUltility.ACCESS_TOKEN_KEY, JSON.stringify(signInState.accessToken)),
  //     AsyncStorageUltility.setItem(AsyncStorageUltility.REFRESH_TOKEN_KEY, JSON.stringify(signInState.refreshToken))
  //   ]
  //   let addTokensResult = await Promise.all(addTokensPromises); 
  //   console.log("ID TOKEN AFTER LOGIN: ", await AsyncStorageUltility.getValue(AsyncStorageUltility.ID_TOKEN_KEY));
  //   console.log("ACCESS TOKEN AFTER LOGIN: ", await AsyncStorageUltility.getValue(AsyncStorageUltility.ID_TOKEN_KEY));
  //   console.log("REFRESH TOKEN AFTER LOGIN: ", await AsyncStorageUltility.getValue(AsyncStorageUltility.ID_TOKEN_KEY));
  //   let user = JWTUlitity.decodeToken(signInState.idToken);
  //   let role = user.activedEmail ? USER_ROLES.ACTIVED_ACCOUNT : USER_ROLES.NON_ACTIVED_ACCOUNT;
  //   console.log("USER's ROLE: ", role);
  //   userDispatcher.updateUserDetails(user);
  //   userRoleDispatcher.updateUserRole(role);
  // }

  const handleSignIn = React.useCallback(async (e) => {
    // console.log("Username or Email: ", signInState.user);
    // console.log("Password: ", signInState.password);
    try {
      console.log("HAS ERROR: ", inputsError.hasAnyError);
      if(inputsError.hasAnyError) return;

      loadingDispatcher.updateIsLoading(true);
      const signInRes = await signInAsync(signInState.user, signInState.password);
      const idToken = signInRes.data.data.idToken;
      const accessToken = signInRes.data.data.accessToken
      const refreshToken = signInRes.data.data.refreshToken;
      let addTokensPromises = [
        AsyncStorageUltility.setValue(AsyncStorageUltility.ID_TOKEN_KEY, idToken),
        AsyncStorageUltility.setValue(AsyncStorageUltility.ACCESS_TOKEN_KEY, accessToken),
        AsyncStorageUltility.setValue(AsyncStorageUltility.REFRESH_TOKEN_KEY, refreshToken)
      ]
      let addTokensResult = await Promise.all(addTokensPromises);
      let user = JWTUlitity.decodeToken(idToken);
      let role = user.activedEmail ? USER_ROLES.ACTIVED_ACCOUNT : USER_ROLES.NON_ACTIVED_ACCOUNT;
      
      // setSignInState({
      //   ...signInState,
      //   idToken: signInRes.data.data.idToken,
      //   accessToken: signInRes.data.data.accessToken,
      //   refreshToken: signInRes.data.data.refreshToken,
      //   isLoginSuccessfully: true
      // });

      userDispatcher.updateUserDetails(user);
      userRoleDispatcher.updateUserRole(role);
      notificationDispatcher.show("You sign in successfully!", "Sign in", "success");
    } catch (error) {
      let errorData = AxiosUtility.getErrorResponse(error);
      notificationDispatcher.show(errorData.message, "Sign in", "error");
    } finally {
      loadingDispatcher.updateIsLoading(false);
    }
  }, [signInState.user, signInState.password, inputsError.hasAnyError]);

  const handleSignInAsGuest = e => {
    userRoleDispatcher.updateUserRole("GUEST");
  };

  const handleForgotPassword = e => {
    navigation.navigate("ForgotPasswordScreen");
  }

  return (
    <KeyboardAwareScrollView
      style={{flex: 1, backgroundColor: theme.colors.background}}
      contentContainerStyle={[{flex: 1}]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enableOnAndroid={true}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container, { backgroundColor: theme.colors.background, justifyContent: 'flex-end' }]}>
          <View style={styles.introduction}>
            <Avatar.Image
              source={require("../../../../../assets/blothlogo.png")}
              style={{backgroundColor: theme.colors.background}}
            />
            <AppText style={[{textAlign: 'center'}, app_sp.mb_12]} font='h1' color={theme.colors.onBackground}>Wellcome Back</AppText>
            <AppText style={{textAlign: 'center'}} font='body3' color={theme.colors.onBackground} >Sharing your story, knowledge, tips, experience with others</AppText>
          </View>
          {/* Login form */}
          <View style={[app_sp.mt_22, { width: "100%" }]}>
            <View style={[styles.input_container, app_sp.mb_12]}>
              <TextInput
                autoCapitalize="none"
                mode="outlined" 
                style={styles.input} 
                label={"E-mail or username"}
                left={
                  <TextInput.Icon
                    icon="account"
                  />
                }
                onEndEditing={e => 
                  AuthUtility.verifyInput(AuthUtility.USERNAME_RULE,
                    (text) => {
                      setSignInState({...signInState, user: text})
                      setInputsError({...inputsError, hasAnyError: false, userError: undefined})
                    },
                    () => {
                      setInputsError({...inputsError, hasAnyError: true, userError: "Username (hoặc e-mail) không hợp lệ :("})
                    },
                  )(e.nativeEvent.text)
                }
              />
              { inputsError.userError && <AppText font="body2" style={styles.text_error}>{inputsError.userError}</AppText>}
            </View>
            <View style={styles.input_container}>
              <TextInput
                secureTextEntry={signInState.hidePassword}
                mode="outlined" 
                style={styles.input} 
                label={"Password"}
                left={
                  <TextInput.Icon
                    icon="lock"
                  />
                }
                right={
                  <TextInput.Icon 
                    onPress={() => {
                      setSignInState({...signInState, hidePassword: !signInState.hidePassword })
                    }}
                    icon={signInState.hidePassword ? "eye" : "eye-off"}
                  />
                }
                onEndEditing={e => 
                  AuthUtility.verifyInput(AuthUtility.PASSWORD_RULE,
                    (text) => {
                      setSignInState({...signInState, password: text})
                      setInputsError({...inputsError, hasAnyError: false, passwordError: undefined})
                    },
                    () => {
                      setInputsError({...inputsError, hasAnyError: true, passwordError: "Password không hợp lệ :("})
                    },
                  )(e.nativeEvent.text)
                }
              />
              {inputsError.passwordError && <AppText font="body2" style={styles.text_error}>{inputsError.passwordError}</AppText>}
            </View>
          </View>

          <View style={[app_sp.mt_22, { width: "100%" }]}>
            <Button
              mode="contained-tonal"
              onPress={handleSignIn}
              style={[app_sh.rounded_8, { width: "100%" }]}
            >Sign in</Button>
          </View>
          <View style={[app_sp.mt_12, {width: "100%", flexDirection: 'row', justifyContent: 'space-between'}]}>
            <Button
              mode="text"
              onPress={handleSignInAsGuest}
            >
              Continue as Guest
            </Button>
            <Button
              mode="text"
              onPress={handleForgotPassword}
              textColor={theme.colors.onBackground}
            >
              Forgot password
            </Button>
          </View>

          <View style={{height: 50}}></View>      
          
          <View style={[app_sp.mt_22, styles.bt_question]}>
            <AppText font="body3">Don't have an account?</AppText>
            <AppText toScreen={{ screenName: 'SignupScreen' }} color={theme.colors.primary} font="body3" weight="bolder">Sign up</AppText>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}