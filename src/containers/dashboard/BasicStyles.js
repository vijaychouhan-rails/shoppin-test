import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const BasicStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  underLineColor: {
    height: 0.1,
    backgroundColor: colors.bluecolor,
  },
  tab: {
    marginTop: 20,
  },
});

export default BasicStyles;
