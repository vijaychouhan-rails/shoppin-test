import { StyleSheet } from 'react-native';
import font from '../../constants/font';
import colors from '../../constants/colors';


const BasicStyles = StyleSheet.create({
  footerText: {
    fontSize: font.footerFontSize,
  },
  footerTab: {
    backgroundColor: colors.white,
  },
});

export default BasicStyles;
