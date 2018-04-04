import { StyleSheet } from 'react-native';
import font from '../../constants/font';

const BasicStyles = StyleSheet.create({
  background_styles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RSText: {
    fontFamily: font.sairaExtra,
    fontSize: 36,
    fontWeight: font.fontBold,
  },
  fontSize: {
    fontSize: 12,
  },
});

export default BasicStyles;
