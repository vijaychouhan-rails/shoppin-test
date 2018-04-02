import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import font from '../../constants/font';

const BasicStyles = StyleSheet.create({
  marginTop: {
    marginTop: 30,
  },
  marginHorizontal: {
    marginHorizontal: 10,
  },
  listedText: {
    fontSize: font.searchFont,
    color: colors.black,
  },
  paddingVertical: {
    paddingVertical: 20,
  },
  onTintColor: {
    // color: colors.green,
  },
});

export default BasicStyles;
