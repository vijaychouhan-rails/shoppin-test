import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const standardFormat = {
  marginVertical: height / 40,
  marginHorizontal: width / 30,
  inputWidth: width / 1.5,
  buttonWidth: width / 15,
  headerMarginTop: width / 3,
};

export default standardFormat;
