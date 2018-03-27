import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import font from '../../constants/font';

const BasicStyles = StyleSheet.create({
  customer_image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    overflow: 'hidden',
    backgroundColor: colors.lightGrey,
  },
  marginLeft: {
    marginLeft: 10,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: font.fontBold,
  },
  marginTop: {
    marginTop: 5,
  },
  extraMarginTop: {
    marginTop: 15,
  },
});

export default BasicStyles;
