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
    backgroundColor: colors.lightGrey,
  },
  marginLeft: {
    marginLeft: 10,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: font.fontBold,
  },
  marginTop: {
    marginTop: 5,
  },
  marginBottom: {
    marginBottom: 10,
  },
  extraMarginTop: {
    marginTop: 15,
  },
  border_style: {
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
  },
  sliderView: {
    height: 200,
  },
  imageSlider: {
    paddingHorizontal: standardFormat.imageSlider_margin_horizontal,
  },
  flex: {
    paddingHorizontal: 5,
  },
});

export default BasicStyles;
