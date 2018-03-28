import { StyleSheet } from 'react-native';
import standardFormat from '../../constants/standardFormat';

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
});

export default BasicStyles;
