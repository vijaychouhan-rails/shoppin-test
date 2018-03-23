import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import standardFormat from '../../constants/standardFormat';

const BasicStyles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
  },
  inputText: {
    marginLeft: standardFormat.marginLeft,
    marginTop: standardFormat.marginVertical,
  },
});

export default BasicStyles;
