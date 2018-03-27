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
  sub_margin_top: {
    marginTop: 18,
  },
  addressWidth: {
    width: 200,
  },
  view_border_style: {
    borderTopWidth: 0.5,
    borderColor: colors.lightGrey,
  },
  circleIcon: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BasicStyles;
