import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const font = {
  fontSize: height / 52,
  footerFontSize: height / 70,
  fontBold: 'bold',
  headingSize: height / 20,
  subHeading: height / 30,
  searchFont: height / 45,
  standardFontSize: height / 55,
  sairaExtra: 'SairaExtraCondensed-SemiBold',
  roboto: 'Roboto',
  rsTextSize: height / 20,
  rsFontSize: height / 35,
  SairaCondensedExtraBold: 'SairaCondensed-ExtraBold',
  logo_font_size: height / 50,
  normal_font_size: height / 50,
};

export default font;
