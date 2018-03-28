import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const font = {
  fontSize: 16,
  footerFontSize: width / 37,
  fontBold: 'bold',
  headingSize: 30,
  subHeading: 16,
  searchFont: 16,
  standardFontSize: 13,
};

export default font;
