import { StyleSheet } from 'react-native';
import font from '../../constants/font';
import colors from '../../constants/colors';


const BasicStyles = StyleSheet.create({
  flexStyle: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
  },
  HeadingText: {
    fontSize: font.subHeading,
    color: colors.black,
    fontFamily: font.sairaExtra,
  },
  iconStyle: {
    color: colors.black,
  },
});

export default BasicStyles;
