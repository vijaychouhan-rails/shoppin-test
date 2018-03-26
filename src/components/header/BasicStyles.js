import { StyleSheet } from 'react-native';
import font from '../../constants/font';
import colors from '../../constants/colors';


const BasicStyles = StyleSheet.create({
  flexStyle: {
    flex: 1,
  },
  title: {
    justifyContent: 'center',
  },
  HeadingText: {
    fontSize: font.subHeading,
    color: colors.black,
  },
  iconStyle: {
    color: colors.black,
  },
});

export default BasicStyles;
