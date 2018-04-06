import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import font from '../../constants/font';
import standardFormat from '../../constants/standardFormat';

const BasicStyles = StyleSheet.create({
  marginTop: {
    marginTop: 30,
  },
  marginHorizontal: {
    marginHorizontal: 10,
  },
  listedText: {
    fontSize: font.rsFontSize,
    fontFamily: font.roboto,
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
