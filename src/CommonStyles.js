import { StyleSheet, Dimensions } from 'react-native';
import colors from './constants/colors';
import font from './constants/font';
import standardFormat from './constants/standardFormat';

const { width, height } = Dimensions.get('window');

const CommonStyles = StyleSheet.create({
  inputText: {
    marginHorizontal: standardFormat.marginHorizontal,
    marginVertical: standardFormat.marginVertical,
    color: colors.greyColor,
    width: standardFormat.inputWidth,
    fontSize: font.fontSize,
    borderBottomWidth: 1,
    borderColor: colors.greyColor,
    paddingLeft: 5,
    paddingBottom: 5,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

});

export default CommonStyles;
