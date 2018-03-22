import { StyleSheet, Dimensions } from 'react-native';
import standardFormat from '../../constants/standardFormat';

const { width } = Dimensions.get('window');

const BasicStyles = StyleSheet.create({
  forgotPassword: {
    marginTop: standardFormat.marginVertical,
    width: width / 1.2,
  },
});

export default BasicStyles;
