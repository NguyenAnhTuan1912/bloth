import { Text, Linking, StyleProp, TextStyle, TextProps } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import app_typo from 'styles/typography';
import app_c from 'styles/colors';

/**
 * @typedef AppTextProps
 * @property {object} props - Props của component.
 * @property {any} children - Từ hoặc câu cần in ra màn hình.
 * @property {number} [numberOfLines=0] - Thông số này giúp mình custom dòng hiển thị ở trong Text (wrap text), và đi cùng là wrap-text mặc định là Ellipse Mode.
 * @property {'Montserrat' | 'SourceSerifPro'} [fontFamily=Montserrat] - Kiểu font
 * @property {'normal' | 'italic'} [fontStyle=normal] - Kiểu của chữ, bình thường hay là nghiêng.
 * @property {'normal' | 'lighter' | 'bolder'} [weight=normal] - Độ đậm của chữ.
 * @property {'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body0' | 'body1' | 'body2' | 'body3' | 'sub0' | 'sub1'} [font=body1] - Từ khoá liên quan tới font, được quy định trong typography.js.
 * @property {string} color - Dùng để chỉnh màu cho chữ.
 * @property {string} hyperLink - Khi link này được truyền vào thì `AppText sẽ giốn như thẻ `a` ở web`.
 * @property {object}  toScreen - Một object chứa thông tin của route khác.
 * @property {string}  toScreen.screenName - Tên của screen muốn navigate tới.
 * @property {object}  toScreen.params - Params muốn truyền cho screen.
 * @property {StyleProp<TextStyle>} [style={}] - Style cho component.
 */

/**
 * __Creator__: @NguyenAnhTuan
 * 
 * Đây là một component được tuỳ chỉnh lại từ Text Component của React Native. Dùng để chỉnh font, màu chữ.
 * Ngoài ra có hỗ trợ thêm cả truyền đường dẫn vào bên trong text.
 * @param {AppTextProps & TextProps} props - Props của component.
 * @returns Trả về `Text` Component có chữ và style (bao gồm fontSize đã được tuỳ chỉnh).
 */
const AppText = ({
  children,
  numberOfLines = 0,
  fontFamily = 'Montserrat',
  fontStyle = 'normal',
  weight = 'normal',
  font = 'body1',
  color,
  hyperLink,
  toScreen = { screenName: "", params: {} },
  style = {},
  ...props
}) => {
  let textStyle = React.useMemo(() => (
    {
      ...app_typo.fonts[fontFamily][fontStyle][weight][font],
      color: color,
      fontStyle: fontStyle,
      ...style
    }
  ), [fontStyle, weight, font, color, style]);

  // Sẽ thêm hàm validate url sau, tạm thời dùng điệu kiện hyperLink !== ''
  if(hyperLink && hyperLink !== '') {
    return (
      <Text
        {...props}
        style={{...app_typo.fonts[fontFamily][fontStyle][weight][font], color: color, ...style}}
        onPress={() => Linking.openURL(hyperLink)}
      >{children}
      </Text>
    );
  }

  if(toScreen.screenName !== "") {
    const navigation = useNavigation();
    return (
      <Text
        {...props}
        style={textStyle}
        onPress={() => navigation.navigate(toScreen.screenName)}
      >{children}
      </Text>
    );
  }

  return (
    <Text
      {...props}
      style={textStyle}
      numberOfLines={numberOfLines}
    >{children}
    </Text>
  )
}

export default AppText