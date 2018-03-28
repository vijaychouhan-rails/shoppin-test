import { StyleSheet, Dimensions } from 'react-native';
import colors from '../constants/colors';
import font from '../constants/font';
import standardFormat from '../constants/standardFormat';

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
    color: colors.black,
    width: standardFormat.inputWidth,
    fontSize: font.searchFont,
    fontWeight: font.fontBold,
    borderBottomWidth: 1,
    borderColor: colors.pureGray,
    paddingLeft: 5,
    paddingBottom: 13,
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
    fontSize: font.searchFont,
    fontWeight: font.fontBold,
    textAlign: 'center',
  },
  buttonStyles: {
    marginTop: standardFormat.marginVertical,
    marginHorizontal: standardFormat.buttonWidth,
  },
  textColorSkyBlue: {
    color: colors.skyBlue,
    fontSize: font.searchFont,
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
  search: {
    flex: 1,
    fontSize: font.searchFont,
    color: colors.black,
    marginTop: 3,
  },
  searchView: {
    width: standardFormat.searchWidth,
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.lightGrey,
    marginVertical: standardFormat.marginVertical,
  },
  searchIcon: {
    color: colors.pureGray,
    marginTop: 3,
    marginRight: 5,
  },
  microphone: {
    color: colors.darkGray,
    justifyContent: 'flex-end',
  },
  fontStyle: {
    color: colors.black,
    fontSize: font.fontSize,
  },
  rightIcon: {
    justifyContent: 'flex-end',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  directionRow: {
    flexDirection: 'row',
  },
  flexStyle: {
    width: standardFormat.searchWidth,
  },
  centerContent: {
    alignItems: 'center',
  },
  imageStyle: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrey,
  },
  fontBold: {
    fontWeight: font.fontBold,
  },
  marginTop: {
    marginTop: 7,
  },
  standardFontSize: {
    fontSize: font.standardFontSize,
  },
  fontColor: {
    color: colors.gray,
  },
  marginLeft: {
    marginLeft: 30,
  },
  justifyContent: {
    justifyContent: 'center',
  },
  standardFont: {
    fontSize: font.searchFont,
    color: colors.black,
  },
  backgroundColor: {
    backgroundColor: colors.white,
  },
  border_style: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.greyColor,
  },
  listView: {
    width: standardFormat.searchWidth,
  },
  subMarginTop: {
    marginTop: 3,
  },
  nameStyle: {
    fontSize: font.subHeading,
    fontWeight: font.fontBold,
    color: colors.black,
  },
  marginBottom: {
    marginBottom: 10,
  },
  RSText: {
    fontSize: font.headingSize,
    fontWeight: font.fontBold,
    color: colors.black,
  },
  imageSlider: {
    flex: 1,
    alignItems: 'center',
  },
  paddingHorizontal: {
    paddingLeft: 10,
  },
  forgotPassword: {
    marginTop: standardFormat.marginVertical,
    width: width / 1.2,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: colors.imageGrayColor,
  },
});

export default CommonStyles;
