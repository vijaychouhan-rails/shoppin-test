import { StyleSheet } from 'react-native';
import standardFormat from '../../constants/standardFormat';
import font from '../../constants/font';


const BasicStyles = StyleSheet.create({
  marginTop: {
    marginTop: standardFormat.inputMarginTop,
  },
  buttomMarginTop: {
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
});

export default BasicStyles;
