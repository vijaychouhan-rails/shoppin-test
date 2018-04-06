import { StyleSheet } from 'react-native';
import font from '../../constants/font';

const BasicStyles = StyleSheet.create({
  background_styles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RSText: {
    fontFamily: font.SairaCondensedExtraBold,
    fontSize: font.rsTextSize,
    fontWeight: font.fontBold,
  },
  fontSize: {
    fontSize: font.standardFontSize,
  },
});

export default BasicStyles;
