import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import standardFormat from '../../constants/standardFormat';
import font from '../../constants/font';

const BasicStyles = StyleSheet.create({
  orderImage: {
    marginTop: 10,
    height: standardFormat.orderImageWidth,
    width: standardFormat.orderImageWidth,
    backgroundColor: colors.imageGrayColor,
    borderWidth: 1,
    borderColor: colors.darkGray,
  },
  margin: {
    marginTop: standardFormat.marginVertical,
    alignItems: 'center',
  },
  fontStyle: {
    fontSize: font.searchFont,
    color: colors.darkGray,
  },
});

export default BasicStyles;
