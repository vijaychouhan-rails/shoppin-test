import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const standardFormat = {
  marginVertical: height / 40,
  marginHorizontal: width / 40,
  inputWidth: width / 1.5,
  buttonWidth: width / 15,
  headerMarginTop: width / 3,
  marginLeft: width / 20,
  searchWidth: width / 1.1,
  width,
};

export default standardFormat;
