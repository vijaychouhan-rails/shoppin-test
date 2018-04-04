import { StyleSheet } from 'react-native';
import font from '../../constants/font';
import colors from '../../constants/colors';

const BasicStyles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
    fontFamily: font.roboto,
    fontWeight: font.medium,
  },
  marginTop: {
    marginTop: 10,
  },
  searchMargin: {
    marginTop: 2,
  },
});

export default BasicStyles;
