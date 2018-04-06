import { StyleSheet } from 'react-native';
import font from '../../constants/font';
import colors from '../../constants/colors';
import standardFormat from '../../constants/standardFormat';

const BasicStyles = StyleSheet.create({
  products_view: {
    height: 40,
    flexDirection: 'row',
    width: standardFormat.searchWidth,
  },
  marginTop: {
    marginTop: 7,
  },
  textStyle: {
    marginLeft: 10,
    fontSize: font.fontSize,
    fontFamily: font.roboto,
    fontWeight: font.medium,
  },
  icon: {
    color: colors.bluecolor,
  },
  margin: {
    marginLeft: 10,
  },
  paddingVertical: {
    paddingVertical: 27,
  },
  fontSize: {
    fontSize: font.standardFontSize,
  },
  centerContent: {
    justifyContent: 'center',
  },
});

export default BasicStyles;
