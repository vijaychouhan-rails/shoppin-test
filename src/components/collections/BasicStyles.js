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
  fontStyle: {
    marginTop: 7,
  },
  textStyle: {
    marginLeft: 10,
    fontSize: font.searchFont,
    fontWeight: font.fontBold,
  },
  icon: {
    color: colors.bluecolor,
  },
  margin: {
    marginLeft: 10,
  },
});

export default BasicStyles;
