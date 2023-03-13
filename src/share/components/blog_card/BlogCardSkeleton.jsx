import { View, Image, StyleSheet } from 'react-native';
import {  Avatar, IconButton, MD3Colors, useTheme} from 'react-native-paper'

import styles from './BlogCardStyles';

import app_sp from 'styles/spacing';
import app_c from 'styles/colors';
import app_sh from 'styles/shape';

export default function BlogCardSkeleton() {
  const theme = useTheme();

  return (
    // Container của thẻ. Thì thẻ này được chia thành 2 cột. Cột để ảnh và cột để phần còn lại.
    <View style={[styles.blog_container, {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.outlineVariant
    }]}>
      {/* Image - Cột ảnh */}
      <View style={styles.blog_container_col}>
        <Image
          style={styles.blog_image}
        />
      </View>

      {/* Content - Cột của phần còn lại, trong này thì gồm có 2 hàng. Hàng content và hàng button */}
      <View style={[styles.blog_container_col, styles.blog_content_container]}>

        {/* Hàng content */}
        <View style={{ flex: 1 , width: '100%'}}>
          <View style={styles.blog_author_info_container}>
            <Avatar.Image
              style={styles.ske_bg}
              size={18}
            />
            <View style={[styles.ske_bg, app_sh.rounded_4 ,{ width: '50%', minHeight: 12, ...app_sp.ms_6 }]}></View>
          </View >

          <View style={{flex: 1}}>
            <View style={[styles.ske_bg, app_sh.rounded_4, { flex: 1, width: '100%', minHeight: 48, ...app_sp.mb_6 }]}></View>
            <View style={[styles.ske_bg, app_sh.rounded_4, { flex: 1, width: '50%', minHeight: 14}]}></View>
          </View>
        </View>

        {/* Hàng button */}
        <View style={styles.blog_content_button_container}>
          <View style={[styles.ske_bg, styles.ske_button, app_sp.me_16]}></View>
          <View style={[styles.ske_bg, styles.ske_button, app_sp.me_16]}></View>
          <View style={[styles.ske_bg, styles.ske_button]}></View>
        </View>
      </View>
    </View >
  )
}