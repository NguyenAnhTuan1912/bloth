import { View, Text } from 'react-native'
import React from 'react'

/**
 * @typedef WithStateHOCProps
 * @property {(data: any[], setData: React.Dispatch<React.SetStateAction<any[]>>) => JSX.Element} Component Component cần dùng state.
 */

/**
 * HOC này dùng cho các component muốn dùng React.useState().
 * @param {(data: any[], setData: React.Dispatch<React.SetStateAction<any[]>>) => JSX.Element} Component Props của component.
 * @returns 
 */
const withState = (
  Component
) => {
  return function() {
    const [state, setState] = React.useState([]);

    return <Component data={state} setData={setState} />
  }
}

export default withState