import { View, Animated, ScrollView, FlatList } from 'react-native'
import React, { Children, useCallback } from 'react'

import StringUtility from 'utilities/string'
import ComponentUtility from 'utilities/component'

import { Button, useTheme, MD3Theme } from 'react-native-paper'

import AppText from '../app_text/AppText'

import styles from './AppTabSliderStyles'
import app_dms from 'styles/dimension'
import TypeScrollView from '../type_scroll_view/TypeScrollView'
import app_sp from 'styles/spacing'

// Để hiểu hơn về component này thì đọc bài này:
// Link: https://docs.google.com/document/d/1S9RUWqudJ-djqsEA5zzzJU8l2HL5Z3dCQQlUaTJZNvY/edit#

/**
 * @typedef TabSliderProps
 * @property {JSX.Element[]} props.children Children này là một tổ hợp AppTabSlider.Slide.
 * @property {number} [props.lineIndexTranslateXStart=20] Thuộc tính này dùng để setup ví trí bắt đầu cho slide index để animation (translateX animation).
 * @property {number} [props.slideTranslateXStart=100] Thuộc tính này dùng để setup ví trí bắt đầu cho slide index để animation (translateX animation).
 * @property {boolean} [isSliderContainerScrollable=false] Thuộc tính này cho biết là AppTabSlider có scroll được hay không?
 */

/**
 * @typedef ScrollInfo
 * @property {number} previousScrollToCenter Gía trị để scroll button trước về giữa.
 * @property {number[]} scrollToXList Danh sách giá trị để scroll button về giữa.
 * @property {number} prevSlideIndex Chỉ mục của index trước.
 * @property {number} tabButtonScrollContainerWidth Chỉ mục của index trước.
 * @property {boolean} isSliderButtonPress Button có được ấn hay chưa.
 */

/**
 * __Creator__: @NguyenAnhTuan1912
 * 
 * Trả về một Slider, có thể scroll hoặc không bằng cách set up thuộc tính `isSliderContainerScrollable`
 * @param {TabSliderProps} props - Props của component.
 * @returns `AppTabSlider`
 */  
const AppTabSlider = ({
  children,
  lineIndexTranslateXStart = 20,
  slideTranslateXStart = 100,
  isSliderContainerScrollable = false
}) => {
  if(!children) return null;
  if(!children.length) return children;

  const theme = useTheme();

  const [hasFirstSlideHeight, setHasFirstSlideHeight] = React.useState(false);
  const [currentSlideIndex, setSlideIndex] = React.useState(0);
  const sliderInfoRef = React.useRef({
    prevSlideIndex: 0,
    isSliderButtonPress: false
  });
  const renderedSlidesInfo = React.useRef({
    renderedSlides: [],
    renderedSlidesHeight: []
  });
  
  const listSlideName = React.useMemo(() => {
    return children.map(child => (
      child.type.name === "Child" && child.props.name !== "" && child.props.name
      ? child.props.name
      : null
      )).join(";");
    }, [children]);
    
  const handlePressTabSlider = React.useCallback((slideIndex) => {
    sliderInfoRef.current.isSliderButtonPress = true;
    setSlideIndex(prevState => {
      sliderInfoRef.current.prevSlideIndex = prevState;
      return slideIndex;
    });
  }, [listSlideName]);
    
  const direction = currentSlideIndex > sliderInfoRef.current.prevSlideIndex ? 1 : (-1);
  const translateAnim = new Animated.Value(slideTranslateXStart * direction);
  const opacityAnim = new Animated.Value(0);
  
  if(sliderInfoRef.current.isSliderButtonPress) {
    Animated.timing(translateAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start();
  
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true
    }).start();
  } else {
    translateAnim.setValue(0);
    opacityAnim.setValue(1);
  }
    
  sliderInfoRef.current.isSliderButtonPress = false;
  
  if(!renderedSlidesInfo.current.renderedSlides[currentSlideIndex]) {
    renderedSlidesInfo.current.renderedSlides[currentSlideIndex] = children[currentSlideIndex];
  }

  return (
    <View
      style={styles.slider_container}
    >
      <TypeScrollView
        types={listSlideName}
        callBack={(type, typeIndex) => { handlePressTabSlider(typeIndex) }}
        buttonStyle="underline"
        lineIndexTranslateXStart={lineIndexTranslateXStart}
        style={{position: "relative", zIndex: 2}}
      />
      <View
        style={styles.slide_container}
      >
        <Animated.View
          style={[{
            position: "relative",
            transform: [
              { translateX: translateAnim }
            ],
            opacity: opacityAnim
          }, isSliderContainerScrollable ? { height: renderedSlidesInfo.current.renderedSlidesHeight[currentSlideIndex] } : { flex: 1 }]}
        >
          {
            renderedSlidesInfo.current.renderedSlides.map((renderedChild, index) => {
              return (
                <Slide
                  key={listSlideName[index]}
                  isOnTop={currentSlideIndex === index}
                >
                  {renderedChild}
                </Slide>
              )
            })
          }
        </Animated.View>
      </View>
    </View>
  )
}

/**
 * __Creator__: @NguyenAnhTuan1912
 * 
 * Component này sẽ giúp chúng ta tạo ra một slider cho một screen.
 * @param {object} props - Props của component.
 * @param {string} props.name - Tên của Slide.
 * @param {() => JSX.Element} props.component - Function trả về component mà muốn làm thành slide.
 * @returns 
 */
const Child = ({
  name,
  component
}) => {
  return component();
}

/**
 * @typedef SlideProps
 * @property {boolean} isOnTop Thuộc tính này cho biết là Slide này có nằm ở trên top hay không? Nếu có thì `zIndex = 1` và `opacity = 1`.
 * @property {any} children Chính là children cần render ở trong Slide.
 */

/**
 * Component này sẽ render ra các 
 * @param {ViewProps & SlideProps} props Props của component.
 * @returns 
 */
const Slide = ({
  isOnTop,
  children,
  ...props
}) => {
  let actualStyle = React.useMemo(() => ComponentUtility.mergeStyle(styles.slide, isOnTop ? styles.slide_show : {}), [isOnTop]);
  return (
    // Bời vì Slider không thể fit được height của nó theo slide được, cho nên là mình phải set height của slider
    // theo slide's heigth. Thì cái slide's height được lưu trong mảng slidesHeight được truyền vào trong component này.
    // Khi đó thì đến slide nào thì chỉ cần lấy height của nó và set cho slider là được.
    <View
      {...props}
      style={actualStyle}
    >
      {children}
    </View>
  );
}

AppTabSlider.Child = Child;

export default AppTabSlider