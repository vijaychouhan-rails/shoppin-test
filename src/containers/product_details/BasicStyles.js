import { StyleSheet } from 'react-native';
import font from '../../constants/font';
import colors from '../../constants/colors';
// import standardFormat from '../../constants/standardFormat';

const BasicStyles = StyleSheet.create({
  marginTop: {
    marginTop: 7,
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
  activeDotColor: {
    color: colors.black,
  },
  imageSlider: {
    flex: 1,
    alignItems: 'center',
  },
  wrapper: {
    height: 200,
    width: 200,
  },
  slide: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundColor1: {
    backgroundColor: '#9DD6EB',
  },
  backgroundColor2: {
    backgroundColor: '#97CAE5',
  },
  backgroundColor3: {
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default BasicStyles;
