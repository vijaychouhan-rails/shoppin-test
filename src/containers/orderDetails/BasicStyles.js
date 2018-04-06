import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import font from '../../constants/font';
import standardFormat from '../../constants/standardFormat';

const BasicStyles = StyleSheet.create({
  customer_image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    overflow: 'hidden',
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
    width: standardFormat.circle_image,
    height: standardFormat.circle_image,
    borderWidth: 1,
    borderRadius: standardFormat.circle_image_radius,
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
  nameStyle: {
    fontFamily: font.roboto,
    fontSize: font.rsFontSize,
  },
  fontStyle: {
    fontFamily: font.roboto,
    fontSize: font.fontSize,
    fontWeight: font.medium,
  },
  circleIconText: {
    fontFamily: font.roboto,
    fontSize: font.searchFont,
    fontWeight: font.medium,
  },
  border_style: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: colors.lightGrey,
  },
});

export default BasicStyles;
