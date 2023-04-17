import { 
  View, 
  Image, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Keyboard
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

import { useRole } from 'share/hooks/useRole';

import AsyncStorage from '@react-native-async-storage/async-storage'

import { Avatar, Button, IconButton, TextInput, useTheme } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'


import AppText from 'share/components/app_text/AppText'
import app_sp from 'styles/spacing'

import styles from './SigninScreenStyles'
import app_sh from 'styles/shape'

import { NavigationProps, ScreenProps } from 'share/types/index.d'
import { useNavigation } from '@react-navigation/native';
import JWTUlitity from 'utilities/jwt';

/**
 * Đây là screen Sign in
 * @param {NavigationProps & ScreenProps} props - Props của component.
 * @returns 
 */
export default function SigninScreen() {
  const theme = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { userRole, dispatchUserRoleUpdate } = useRole();
  const [signInState, setSignInState] = React.useState({
    hidePassword: true,
    user: "",
    password: ""
  });

  const handleSignIn = React.useCallback(async (e) => {
    // signInAsync
    // console.log("Username or Email: ", signInState.user);
    // console.log("Password: ", signInState.password);
    const signInRes = await signInAsync({ 
      data: {
        user: signInState.user,
        password: signInState.password
      }
     });
     let resData = signInRes.data;
     const value = await AsyncStorage.setItem("id-token", JSON.stringify(resData.data.idToken));
     let user = JWTUlitity.decodeToken(resData.data.idToken);
     let role = user.activedEmail ? USER_ROLES.ACTIVED_ACCOUNT : USER_ROLES.NON_ACTIVED_ACCOUNT;
     dispatchUserRoleUpdate(role);
     dispatch(updateUserDetails(user));
  }, [signInState.user, signInState.password]);

  const handleSignInAsGuest = React.useCallback((e) => {
    dispatchUserRoleUpdate("GUEST");
  }, []);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
          <View style={styles.td}>
            <Avatar.Image
              source={require("../../../../../assets/blothlogo.png")}
              style={{backgroundColor: theme.colors.background}}
            />
            <AppText style={[styles.text, app_sp.mb_12]} font='h1' color={theme.colors.onBackground}>Wellcome Back</AppText>
            <AppText style={styles.text} font='body3' color={theme.colors.onBackground} >Sharing your story, knowledge, tips, experience with others</AppText>
          </View>
          <View style={[app_sp.mt_22, { width: "100%" }]}>
            <TextInput 
              mode="outlined" 
              style={[styles.input, app_sp.mb_12]} 
              label={"E-mail or username"}
              left={
                <TextInput.Icon
                  icon="account"
                />
              }
              onChangeText={text => setSignInState({...signInState, user: text})}
            />
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
              onChangeText={text => setSignInState({...signInState, password: text})}
            />
          </View>
          <View style={[app_sp.mt_22, { width: "100%" }]}>
            <Button
              mode="contained-tonal"
              onPress={handleSignIn}
              style={[app_sh.rounded_8, { width: "100%" }]}
            >Sign in</Button>
          </View>
          <View style={[app_sp.mt_12]}>
            <Button
              mode="text"
              onPress={handleSignInAsGuest}
            >
              Continue as Guest
            </Button>
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}