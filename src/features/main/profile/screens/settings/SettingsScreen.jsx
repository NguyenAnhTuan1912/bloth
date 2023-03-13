import { View, Text, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'

import { ThemeContext } from 'share/contexts/ThemeContext';

import { Button, useTheme, IconButton, List, RadioButton } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppText from 'share/components/app_text/AppText'

import styles from './SettingsScreenStyles'

import { NavigationProps } from 'share/types/index.d';

/**
 * Đây là screen Sign in
 * @param {NavigationProps} props - Props của component.
 * @returns 
 */
export default function SettingsScreen() {
  const theme = useTheme();
  const { currentTheme, setCurrentTheme } = React.useContext(ThemeContext);

  const typeOfTheme = {
    light: 'light',
    dark: 'dark'
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <List.Accordion title="Theme">
        <List.Item
          onPress={() => { setCurrentTheme(typeOfTheme.light) }}
          title="Light"
          right={({ color }) => (
            currentTheme === typeOfTheme.light ? <Ionicons size={20} color={color} name="checkmark-outline" /> : null
          )}
        />
        <List.Item
          onPress={() => { setCurrentTheme(typeOfTheme.dark) }}
          title="Dark"
          right={({ color }) => (
            currentTheme === typeOfTheme.dark ? <Ionicons size={20} color={color} name="checkmark-outline" /> : null
          )}
        />
      </List.Accordion>
    </View>
  )
}