import { StyleSheet } from 'react-native';
import standardFormat from '../../constants/standardFormat';
import font from '../../constants/font';
import colors from '../../constants/colors';


const BasicStyles = StyleSheet.create({
  marginTop: {
    marginTop: standardFormat.inputMarginTop,
  },
  buttomMarginTop: {
    height: standardFormat.button_height,
    marginTop: standardFormat.buttomMarginTop,
  },
  titleMargin: {
    marginTop: standardFormat.top_margin,
    marginBottom: 5,
  },
  marginBoth: {
    marginVertical: standardFormat.topSpace,
  },
  topMargin: {
    marginTop: standardFormat.forgot_password_margin,
  },
  fontType: {
    fontFamily: font.sairaExtra,
  },
  logoStyle: {
    height: standardFormat.logo_size,
    width: standardFormat.logo_size,
    marginTop: standardFormat.logo_place,
    alignSelf: 'flex-end',
  },
  alignSelf: {
    alignSelf: 'center',
  },
  marginHorizontal: {
    marginHorizontal: 20,
  },
  logo_textplace: {
    alignSelf: 'flex-end',
    bottom: standardFormat.logo_textplace,
  },
  fontSize: {
    fontSize: font.logo_font_size,
  },
  background: {
    backgroundColor: colors.white,
    // paddingHorizontal: standardFormat.marginLeft,
  },
});

export default BasicStyles;
