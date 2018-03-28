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
  textStyle: {
    marginLeft: 10,
    fontSize: font.searchFont,
    fontWeight: font.fontBold,
  },
  icon: {
    color: colors.bluecolor,
  },
  text_top_margin: {
    marginTop: standardFormat.setting_top_margin,
  },
  marginTop: {
    marginTop: standardFormat.list_margin,
  },
  arrow_top_margin: {
    marginTop: standardFormat.arrow_top_margin,
  },
  margin: {
    margin: standardFormat.listMargin,
  },
});

export default BasicStyles;
