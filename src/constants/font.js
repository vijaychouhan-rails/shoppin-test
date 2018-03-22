import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const font = {
  fontSize: 12,
  footerFontSize: width / 37,
  fontBold: 'bold',
  headingSize: 30,
  subHeading: 18,
};

export default font;
