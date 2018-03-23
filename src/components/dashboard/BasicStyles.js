import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import standardFormat from '../../constants/standardFormat';
import font from '../../constants/font';

const BasicStyles = StyleSheet.create({
  orderImage: {
    marginTop: 10,
    height: standardFormat.searchWidth,
    width: standardFormat.searchWidth,
    backgroundColor: colors.lightGrey,
    borderWidth: 1,
    borderColor: colors.greyColor
  },
  RSText: {
    fontSize: font.headingSize,
    fontWeight: font.fontBold,
    color: colors.black,
  },
  margin: {
    marginTop: standardFormat.marginVertical,
    alignItems: 'center',
  },
  fontStyle: {
    fontSize: font.searchFont,
    color: colors.greyColor,
  },
});

export default BasicStyles;
