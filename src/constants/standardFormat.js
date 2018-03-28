import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const standardFormat = {
  marginVertical: height / 40,
  marginHorizontal: width / 40,
  inputWidth: width / 1.5,
  buttonWidth: width / 50,
  headerMarginTop: width / 3,
  marginLeft: width / 20,
  searchWidth: width / 1.1,
  buttomMarginTop: height / 15,
  inputMarginTop: height / 15,
  marginTop: height / 20,
  forgotButtonWidth: width / 1.3,
  topMargin: height / 20,
  orderImageWidth: width / 1.2,
  width,
  padding: width / 15,
  productImage: height / 2.5,
  productImageView: height / 3,
  top_margin: height / 5,
  topSpace: height / 50,
  forgot_password_margin: height / 30,
  listMargin: height / 35,
  list_margin: height / 50,
  arrow_top_margin: height / 30,
  setting_top_margin: height / 60,
};

export default standardFormat;
