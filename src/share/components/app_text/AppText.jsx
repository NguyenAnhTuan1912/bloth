import { Text, Linking, StyleProp, TextStyle, TextProps } from 'react-native'
import React from 'react'
import { useNavigation, Link } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

import ComponentUtility from 'utilities/component';

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
 * @property {'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body0' | 'body1' | 'body2' | 'sub0' | 'sub1'} [font=body1] - Từ khoá liên quan tới font, được quy định trong typography.js.
 * @property {string} color - Dùng để chỉnh màu cho chữ.
 * @property {string} hyperLink - Khi link này được truyền vào thì `AppText sẽ giốn như thẻ `a` ở web`.
 * @property {object}  toScreen - Một object chứa thông tin của route khác.
 * @property {string}  toScreen.screenName - Tên của screen muốn navigate tới.
 * @property {object}  toScreen.params - Params muốn truyền cho screen.
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
  fontFamily = 'Montserrat',
  fontStyle = 'normal',
  weight = 'normal',
  font = 'body1',
  color,
  hyperLink,
  toScreen = { screenName: "", params: {} },
  ...props
}) => {
  const theme = useTheme();
  let stylePropIsArray = props.style instanceof Array;

  let textStyle = React.useMemo(() => (
    {
      ...app_typo.fonts[fontFamily][fontStyle][weight][font],
      color: color ? color : theme.colors.onBackground,
    }
  ), [fontStyle, weight, font, color, theme]);

  let textCompleteStyle = ComponentUtility.mergeStyle(textStyle, props.style);

  // Sẽ thêm hàm validate url sau, tạm thời dùng điệu kiện hyperLink !== ''
  if(hyperLink && hyperLink !== '') {
    return (
      <Text
        {...props}
        style={[textCompleteStyle, { color: theme.colors.primary }]}
        onPress={() => Linking.openURL(hyperLink)}
      >{children}
      </Text>
    );
  }

  if(toScreen.screenName !== "") {
    return (
      <Link
        {...props}
        style={textCompleteStyle}
        to={{screen: toScreen.screenName, params: toScreen.params}}
      >{children}
      </Link>
    );
  }

  return (
    <Text
      {...props}
      style={textCompleteStyle}
    >{children}
    </Text>
  )
}

export default AppText