import { StyleSheet } from 'react-native';
import standardFormat from '../../constants/standardFormat';
import font from '../../constants/font';
import colors from '../../constants/colors';

const BasicStyles = StyleSheet.create({
  listView: {
    width: standardFormat.searchWidth,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: font.fontBold,
  },
  marginTop: {
    marginTop: 5,
  },
  subMarginTop: {
    marginTop: 3,
  },
  nameStyle: {
    fontSize: font.subHeading,
    fontWeight: font.fontBold,
    color: colors.black,
  },
  marginBottom: {
    marginBottom: 10,
  }
});

export default BasicStyles;
