import { StyleSheet, Dimensions } from 'react-native';
import colors from './constants/colors';
import font from './constants/font';
import standardFormat from './constants/standardFormat';

const { width } = Dimensions.get('window');

const CommonStyles = StyleSheet.create({
  header_footer: {
    width,
    backgroundColor: colors.white,
    shadowOffset:
    {
      height: 0, width: 0,
    },
    shadowOpacity: 0,
    shadowColor: 'transparent',
  },
  inputText: {
    color: colors.greyColor,
    width: standardFormat.inputWidth,
    fontSize: font.fontSize,
    borderBottomWidth: 1,
    borderColor: colors.greyColor,
    paddingLeft: 5,
    paddingBottom: 5,
  },
  marginBoth: {
    marginHorizontal: standardFormat.marginHorizontal,
    marginVertical: standardFormat.marginVertical,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  textStyle: {
    color: colors.white,
    fontWeight: font.fontBold,
    textAlign: 'center',
  },
  buttonStyles: {
    marginTop: standardFormat.marginVertical,
    marginHorizontal: standardFormat.buttonWidth,
  },
  textColorSkyBlue: {
    color: colors.skyBlue,
  },
  textColorWhite: {
    color: colors.white,
  },
  HeadingText: {
    marginTop: standardFormat.headerMarginTop,
    fontSize: font.headingSize,
    fontWeight: font.fontBold,
    color: colors.black,
  },

});

export default CommonStyles;
