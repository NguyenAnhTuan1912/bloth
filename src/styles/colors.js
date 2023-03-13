import { StyleSheet } from 'react-native'

// Tuan: Palette màu chính
const APP_PRIMARY_COLOR = {
	HEX: '#F11859',
  RGB: '241, 24, 89'
}
const APP_SECOND_COLOR = {
  HEX: '#262626',
  RGB: '38, 38, 38'
}
const APP_THIRD_COLOR = {
  HEX: '#FFFFFF',
  RGB: '255, 255, 255'
}
const APP_FOURTH_COLOR = {
  HEX: '#CD003D',
  RGB: '205, 0, 61'
}

// Tuan: Palette màu phụ
const APP_SUB_PRIMARY_COLOR = {
	HEX: '#F7FBFC',
	RGB: '247, 251, 252'
}
const APP_SUB_SECOND_COLOR = {
	HEX: '#D6E6F2',
	RGB: '214, 230, 242'
}
const APP_SUB_THIRD_COLOR = {
	HEX: '#B9D7EA',
	RGB: '185, 215, 234'
}
const APP_SUB_FOURTH_COLOR = {
	HEX: '#769FCD',
	RGB: '118, 159, 205'
}

// Tuan: Màu mở rộng
const APP_EXT_PRIMARY_COLOR = {
	HEX: '#ECECEC',
	RGB: '236, 236, 236'
}
const APP_EXT_SECOND_COLOR = {
	HEX: '#5F6C7C',
	RGB: '95, 108, 124'
}
const APP_EXT_THIRD_COLOR = {
	HEX: '#B4B4B4',
	RGB: '180, 180, 180'
}

// ==========================
// ===== CODE SEPERATOR =====
// ==========================

const HEX = {
	primary: APP_PRIMARY_COLOR.HEX,
	second: APP_SECOND_COLOR.HEX,
	third: APP_THIRD_COLOR.HEX,
	fourth: APP_FOURTH_COLOR.HEX,
	sub_primary: APP_SUB_PRIMARY_COLOR.HEX,
	sub_second: APP_SUB_SECOND_COLOR.HEX,
	sub_third: APP_SUB_THIRD_COLOR.HEX,
	sub_fourth: APP_SUB_FOURTH_COLOR.HEX,
	ext_primary: APP_EXT_PRIMARY_COLOR.HEX,
	ext_second: APP_EXT_SECOND_COLOR.HEX,
	ext_third: APP_EXT_THIRD_COLOR.HEX
}
const RGB = {
	primary: APP_PRIMARY_COLOR.RGB,
	second: APP_SECOND_COLOR.RGB,
	third: APP_THIRD_COLOR.RGB,
	fourth: APP_FOURTH_COLOR.RGB,
	sub_primary: APP_SUB_PRIMARY_COLOR.RGB,
	sub_second: APP_SUB_SECOND_COLOR.RGB,
	sub_third: APP_SUB_THIRD_COLOR.RGB,
	sub_fourth: APP_SUB_FOURTH_COLOR.RGB,
	ext_primary: APP_EXT_PRIMARY_COLOR.RGB,
	ext_second: APP_EXT_SECOND_COLOR.RGB,
	ext_third: APP_EXT_THIRD_COLOR.RGB
}

const app_c = {
	HEX,
	RGB,
}

export default app_c