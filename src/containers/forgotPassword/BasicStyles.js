import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import standardFormat from '../../constants/standardFormat';

const BasicStyles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
  },
  inputText: {
    marginLeft: standardFormat.marginLeft,
    marginTop: standardFormat.topMargin,
  },
  marginTop: {
    marginTop: standardFormat.marginTop,
    height: standardFormat.button_height,
    marginHorizontal: standardFormat.marginLeft,
  },
});

export default BasicStyles;
