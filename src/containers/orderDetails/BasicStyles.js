import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
// import standardFormat from '../../constants/standardFormat';

const BasicStyles = StyleSheet.create({
  customer_image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    overflow: 'hidden',
    backgroundColor: colors.lightGrey,
  },
  marginLeft: {
    marginLeft: 10,
  },
  marginTop: {
    marginTop: 15,
  },
  addressWidth: {
    width: 200,
  },
});

export default BasicStyles;
