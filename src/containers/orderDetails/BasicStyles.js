import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
// import standardFormat from '../../constants/standardFormat';

const BasicStyles = StyleSheet.create({
  customer_image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    overflow: 'hidden',
    backgroundColor: colors.greyColor,
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
    borderColor: colors.greyColor,
  },
  circleIcon: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.greyColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  padding: {
    paddingVertical: 7,
  },
  paddingRight: {
    paddingRight: 10,
  },
  alignRight: {
    justifyContent: 'flex-end',
  },
  paddingVertical: {
    paddingVertical: 14,
  },
});

export default BasicStyles;
