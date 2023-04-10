import { View, Text } from 'react-native'
import React from 'react'

import { ReactNativeTextGeneratorProto } from 'libs/mark-format/react-native'
import { configStyleOfFTTS } from 'libs/mark-format/react-native/config/toReactNative.config'

import app_c from 'styles/colors'
import app_typo from 'styles/typography'

const customStyles = {
  "BOLD": {
    fontFamily: "Montserrat-Bold",
    fontWeight: "bold"
  },
  "ITALIC": {
    fontFamily: "Montserrat-Italic",
    fontStyle: "italic"
  },
  "BOLD&ITALIC": {
    fontFamily: "Montserrat-BoldItalic"
  },
  "LIGHT&ITALIC": {
    fontFamily: "Montserrat-LightItalic"
  },
  "HIGHLIGHT": {
    color: "#191c1d",
    paddingVertical: 4,
    paddingHorizontal: 2,
    backgroundColor: 'yellow'
  },
  "HEADING_0": { ...app_typo.fonts.SourceSerifPro.normal.normal.h0 },
  "HEADING_1": { ...app_typo.fonts.SourceSerifPro.normal.normal.h1 },
  "HEADING_2": { ...app_typo.fonts.Montserrat.normal.normal.h2 },
  "HEADING_3": { ...app_typo.fonts.Montserrat.normal.normal.h3 },
  "HEADING_4": { ...app_typo.fonts.Montserrat.normal.normal.h4 },
  "HEADING_5": { ...app_typo.fonts.Montserrat.normal.normal.h5 },
  "SUB_0": { ...app_typo.fonts.Montserrat.normal.normal.sub0 },
  "SUB_1": { ...app_typo.fonts.Montserrat.normal.normal.sub1 },
}

configStyleOfFTTS(customStyles);

/**
 * @typedef MarkFormatProps
 * @property {string} text Đoạn văn bản bình thường.
 */

/**
 * __Creator__: @NguyenAnhTuan1912
 * 
 * Component này dùng để hiển thị định dạng cho một văn bản.
 * @param {MarkFormatProps} props Props của component.
 * @returns 
 */
const MarkFormat = ({
  text
}) => {
  let generator = React.useMemo(() => ReactNativeTextGeneratorProto.clone() ,[text]);
  let mfWTextNTextArr = React.useMemo(() => generator.decomposeMF(text), [text]);
  let content = React.useMemo(() => { 
    generator.createTree(mfWTextNTextArr);
    return generator.renderer.render(generator.mfTree);
  }, [mfWTextNTextArr]);

  return content;
}

export default MarkFormat