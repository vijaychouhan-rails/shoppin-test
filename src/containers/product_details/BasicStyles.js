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
    fontSize: font.searchFont,
  },
  margin: {
    marginLeft: 10,
  },
  paddingBoth: {
    paddingVertical: 10,
  },
  slide: {
    height: standardFormat.productImage,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundColor1: {
    backgroundColor: colors.screen1,
  },
  backgroundColor2: {
    backgroundColor: colors.screen1,
  },
  backgroundColor3: {
    backgroundColor: colors.screen3,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageSlider: {
    margin: standardFormat.image_slider_padding,
  },
});

export default BasicStyles;
