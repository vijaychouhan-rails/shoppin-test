import { StyleSheet } from 'react-native';
import font from '../../constants/font';
import colors from '../../constants/colors';
import standardFormat from '../../constants/standardFormat';

const BasicStyles = StyleSheet.create({
  marginTop: {
    marginTop: 7,
    marginLeft: 10,
  },
  textStyle: {
    marginLeft: 10,
    fontFamily: font.roboto,
  },
  fontSizeHeading: {
    fontSize: font.searchFont,
  },
  fontSize: {
    fontSize: font.font,
  },
  margin: {
    marginLeft: 10,
  },
  paddingBoth: {
    paddingVertical: 10,
  },
  slide: {
    height: standardFormat.productImage,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundColor1: {
    backgroundColor: colors.lightGrey,
  },
  backgroundColor2: {
    backgroundColor: colors.screen1,
  },
  backgroundColor3: {
    backgroundColor: colors.screen3,
  },
  imageSlider: {
    margin: standardFormat.image_slider_padding,
  },
  slideImage: {
    flex: 1,
  },
  marginTopText: {
    marginTop: 20,
  },
  centerContent: {
    justifyContent: 'center',
  },
  marginRight: {
    marginRight: 10,
  },
  border_style: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    marginTop: 10,
  },
});

export default BasicStyles;
