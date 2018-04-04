import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const font = {
  fontSize: 14,
  footerFontSize: width / 37,
  fontBold: 'bold',
  headingSize: 32,
  subHeading: 26,
  searchFont: 16,
  standardFontSize: 12,
  sairaExtra: 'SairaExtraCondensed-SemiBold',
  roboto: 'Roboto',
  rsTextSize: 36,
  rsFontSize: 18,
};

export default font;
