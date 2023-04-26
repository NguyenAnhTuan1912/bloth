import { View, Text } from 'react-native'
import React from 'react'

import StringUtility from 'utilities/string'

import { useTheme, Chip } from 'react-native-paper'

import styles from './BlogTypesChoiceStyles'
import app_sp from 'styles/spacing'

const BlogTypesChoice = () => {
  const theme = useTheme();
  const types = ["tech", "education", "econimic"];

  const [interestedTypes, setInterestedTypes] = React.useState([]);

  const handleAddInterestedType = (type) => {
    setInterestedTypes(prevState => [...prevState, type]);
  }

  const handleRemoveInterestedType = (type) => {
    setInterestedTypes(prevState => {
      let cpPrevState = prevState.slice();
      cpPrevState.splice(cpPrevState.findIndex(_type => _type === type), 1);
      return cpPrevState;
    });
  }

  return (
    <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View style={styles.chip_container}>
        {
          types.map((type, index) => {
            let selected = interestedTypes.includes(type);
            let s = [app_sp.me_10]
            if(index === 0) s.push(app_sp.mb_10)
            return <Chip style={s} onPress={() => handleAddInterestedType(type)} selected={selected} mode="outlined" key={type}>{StringUtility.toTitleCase(type)}</Chip>
          })
        }
      </View>
    </View>
  )
}

export default BlogTypesChoice