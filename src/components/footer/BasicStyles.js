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
  icon: {
    color: colors.darkGray,
  },
  marginTop: {
    marginTop: 5,
  },
  iconBlue: {
    color: colors.bluecolor,
  },
});

export default BasicStyles;
