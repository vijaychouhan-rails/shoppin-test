import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';
import font from '../../constants/font';
import standardFormat from '../../constants/standardFormat';

const { width, height } = Dimensions.get('window');

const BasicStyles = StyleSheet.create({
  forgotPassword: {
    marginTop: standardFormat.marginVertical,
    width: width / 1.2,
  }
});

export default BasicStyles;
