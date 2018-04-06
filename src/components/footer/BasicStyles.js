import { StyleSheet } from 'react-native';
import font from '../../constants/font';
import colors from '../../constants/colors';
import standardFormat from '../../constants/standardFormat';


const BasicStyles = StyleSheet.create({
  footerText: {
    fontSize: font.footerFontSize,
    fontFamily: font.roboto,
  },
  footerTab: {
    backgroundColor: colors.white,
    paddingTop: standardFormat.footer_padding,
  },
  icon: {
    color: colors.darkGray,
  },
  marginTop: {
    marginTop: standardFormat.footer_text_margin,
  },
  iconBlue: {
    color: colors.bluecolor,
  },
  backgroundColor: {
    color: colors.bluecolor,
  },
});

export default BasicStyles;
