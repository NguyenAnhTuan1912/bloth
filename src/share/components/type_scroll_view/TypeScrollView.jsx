import { ScrollView, Text, View, Animated } from 'react-native'
import React from 'react'
import { Button, useTheme } from 'react-native-paper'

import StringUtility from 'utilities/string'

import AppText from '../app_text/AppText'

import styles from './TypeScrollViewStyle'
import app_sp from 'styles/spacing'

import { ViewStyles } from 'share/types/index.d'

/**
 * @typedef TypeScrollViewProps
 * @property {number} lineIndexTranslateXStart (Only use with `buttonStyle="underline"`) vị trí bắt đầu của underline để translate.
 * @property {string} types Là một chuỗi bao gồm các loại của một data nào đó mà các loại này đươc ngăn cách bởi dấu `;`.
 * @property {ViewStyles} scrollStyle Là style của scroll view.
 * @property {ViewStyles} containerStyle Là style của scroll view container.
 * @property {"capsule" | "rounded_3" | "rounded_4" | "rounded_6" | "rounded_8" | "rounded_12" | "rounded_16" | "underline"} buttonStyle Là style cho các button.
 * @property {(type: string, typeIndex: number) => void} callBack Là một callBack nhận vào 2 tham số là `type` vừa ấn và index của type đó `typeIndex`.
 */

/**
 * __Creator__: @NguyenAnhTuan1912
 * 
 * Component này dùng để tạo ra một scrollable view cho các type buttons. Ví dụ
 * khi có một dữ liệu nào đó trong app như là Blog, thì mình sẽ dùng cái này để
 * hiển thị ra các loại blog cho người dùng như là `All`, `Recommended`...
 * 
 * __Lưu ý__: Component này luôn phải có `types` và `setType`. Tại vì sao thì
 * cái tính chất của component này đã giải thích.
 * @param {TypeScrollViewProps} props Props của component.
 * @returns Một `ScrollView` có các button.
 * 
 * @example
 * //// Thêm type cho component
 * ...
 * <TypeScrollView type="all;recommended;popular;most-visit;most-favorite" />
 * // Or
 * <TypeScrollView type="all;recommended;popular;most_visit;most_favorite" />
 * ...
 * //// Dùng để lấy type.
 * ...
 * const [type, setType] = React.useState("");
 * console.log(type); // Output: All khi nút `All` được ấn. most_visit khi nút `Most Visit` được ấn. 
 * returrn (
 *  <TypeScrollView
 *    type="all;recommended;popular;most_visit;most_favorite"
 *    callBack={setType}
 * />
 * )
 * ...
 */
const TypeScrollView = ({
  types = "",
  scrollStyle = {},
  containerStyle = {},
  buttonStyle = 'capsule',
  lineIndexTranslateXStart = 20,
  callBack
}) => {
  // Đầu tiên thì mình check xem là types được đưa vào chưa? Nếu rồi thì có nghĩa là mình có thể tạo được
  // các type buttons rồi.
  // Nếu chưa thì trả về cho typesArr là một mảng gồm 5 phần tử để làm skeletion loading.
  const typesArr = React.useMemo(() => types === "" ? [1, 2, 3, 4, 5] : types.split(";"), [types]);
  // Bời vì typesArr là số cho nên là mình check luôn types ở khúc này. Trả về tương tự như typesArr.
  const typesArrInTitleCase = React.useMemo(() => types === "" ? [1, 2, 3, 4, 5] : typesArr.map(type => StringUtility.toTitleCase(type)), [typesArr]);
  const theme = useTheme();
  const [currentTypeIndex, setTypeIndex] = React.useState(0);
  const [isParentLayouted, setIsParentLayouted] = React.useState(false);
  const scrollRef = React.useRef(null);
  const buttonInfoRef = React.useRef({
    // previousScrollToCenter: 0,
    scrollToXList: [],
    prevButtonIndex: 0,
    buttonScrollContainerWidth: 0,
    isButtonPress: false,
  });

  const direction = currentTypeIndex > buttonInfoRef.current.prevButtonIndex ? 1 : (-1);
  const lineTranslateAmin = new Animated.Value(lineIndexTranslateXStart * direction * -1);

  const handlePressTabSlider = React.useCallback((typeIndex) => {
    return function() {
      buttonInfoRef.current.isButtonPress = true;
      setTypeIndex(prevState => {
        buttonInfoRef.current.prevButtonIndex = prevState;
        return typeIndex;
      });
      callBack(typesArr[typeIndex], typeIndex);
    }
  }, [typesArr]);

  if(buttonInfoRef.current.isButtonPress) {
    Animated.timing(lineTranslateAmin, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true
    }).start();
    
    if(scrollRef.current && currentTypeIndex !== 0) {
      scrollRef.current.scrollTo(
        {
          x: buttonInfoRef.current.scrollToXList[currentTypeIndex],
          y: 0,
          animated: true
        }
      )
    } else if(scrollRef.current && currentTypeIndex === 0) {
      scrollRef.current.scrollTo({x: 0, y: 0, animated: true})
    }
  } else {
    lineTranslateAmin.setValue(0);
  }

  buttonInfoRef.current.isButtonPress = false;

  return (
    <View style={containerStyle}>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        style={scrollStyle}
        onLayout={e => {
          const {width} = e.nativeEvent.layout;
          buttonInfoRef.current.buttonScrollContainerWidth = width;
          setIsParentLayouted(true);
        }}
      >
        {
          isParentLayouted && typesArr.map((slideName, index) =>
            // Ở khúc này render các skeleton cho các type buttons đây.
            !types ? (
              <Button
                overrideShape={buttonStyle}
                key={slideName}
                style={{...app_sp.me_12, width: 70}}
              >
                <AppText font="body1"> </AppText>
              </Button>
            ) :
            (
              <View
                key={slideName + 'container'}
                onLayout={e => {
                  const { x, width } = e.nativeEvent.layout;
                  const snapItemPosition = (buttonInfoRef.current.buttonScrollContainerWidth / 2)
                  const distanceFromXToSnapPosition = x - snapItemPosition;
                  const halfWidthOfButton = (width / 2);
                  const distanceForScrollingToCenterButton = distanceFromXToSnapPosition + halfWidthOfButton;
                  buttonInfoRef.current.scrollToXList[index] = distanceForScrollingToCenterButton;
                  console.log(`Button ${slideName}: ${distanceFromXToSnapPosition}, x: ${x}, center: ${distanceForScrollingToCenterButton}, slider'width: ${buttonInfoRef.current.buttonScrollContainerWidth}`);
                }}
              >
                {
                  // Có hai hướng render, một là render ra các nút mặc định mà t đã viết từ trước,
                  // Và loại thứ 2 là nút có underline ở dưới.
                  buttonStyle !== "underline"
                  ? (
                    <Button
                      mode={currentTypeIndex === index ? "contained" : "text"}
                      key={slideName + 'button'}
                      onPress={handlePressTabSlider(index)}
                      style={app_sp.me_12}
                    >
                      {typesArrInTitleCase[index]}
                    </Button>
                  )
                  : (
                    <>
                      <Button
                        mode="text"
                        key={slideName + 'button'}
                        onPress={handlePressTabSlider(index)}
                      >
                        {typesArrInTitleCase[index]}
                      </Button>
                      <Animated.View
                        key={slideName + 'line'}
                        style={{
                          ...(index === currentTypeIndex ? {...styles.line_index, backgroundColor: theme.colors.onBackground } : {}),
                          transform: [
                            { translateX: lineTranslateAmin }
                          ],
                        }}
                      ></Animated.View>
                    </>
                  )
                }
              </View>
            )
          )
        }
      </ScrollView>
    </View>
  )
}

export default TypeScrollView