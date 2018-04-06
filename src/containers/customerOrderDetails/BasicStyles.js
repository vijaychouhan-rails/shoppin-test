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
  textStyle: {
    fontSize: font.fontSize,
    fontWeight: font.fontBold,
  },
  marginTop: {
    marginTop: 5,
  },
  marginBottom: {
    marginBottom: 10,
  },
  extraMarginTop: {
    marginTop: standardFormat.extra_margin_top,
  },
  border_style: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingBottom: standardFormat.border_slider_view,
    borderColor: colors.lightGrey,
  },
  sliderView: {
    height: standardFormat.slider_height,
  },
  imageSlider: {
    paddingHorizontal: standardFormat.imageSlider_margin_horizontal,
  },
  flex: {
    paddingHorizontal: 5,
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
  fontSize: {
    fontSize: font.fontSize,
  },
  recentOrders: {
    fontFamily: font.roboto,
    fontSize: font.rsFontSize,
    fontWeight: font.fontBold,
  },
  fulfiledSize: {
    fontSize: font.standardFontSize,
  },
  alignItems: {
    justifyContent: 'center',
  },
});

export default BasicStyles;
