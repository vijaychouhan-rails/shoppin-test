import { StyleSheet, Dimensions } from 'react-native';
import colors from '../constants/colors';
import font from '../constants/font';
import standardFormat from '../constants/standardFormat';

const { width } = Dimensions.get('window');

const CommonStyles = StyleSheet.create({
  header_footer: {
    width,
    height: standardFormat.header_footer_size,
    backgroundColor: colors.white,
    shadowOffset:
    {
      height: 0, width: 0,
    },
    shadowOpacity: 0,
    shadowColor: 'transparent',
    borderColor: colors.lightGrey,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  inputText: {
    color: colors.black,
    fontFamily: font.roboto,
    width: standardFormat.inputWidth,
    fontSize: font.searchFont,
    fontWeight: standardFormat.regular,
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
    height: standardFormat.background_height,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  textStyle: {
    color: colors.white,
    fontSize: font.searchFont,
    fontWeight: font.fontBold,
    textAlign: 'center',
    fontFamily: font.roboto,
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
  },
  search: {
    flex: 1,
    fontSize: font.searchFont,
    color: colors.black,
    fontFamily: font.roboto,
    marginTop: 3,
  },
  searchView: {
    width: standardFormat.searchWidth,
    flexDirection: 'row',
    borderRadius: 10,
    padding: standardFormat.padding_search_view,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGrey,
    marginVertical: standardFormat.marginVertical,
  },
  searchIcon: {
    color: colors.pureGray,
    marginRight: 5,
  },
  microphone: {
    marginTop: standardFormat.search_icon_top_margin,
    color: colors.darkGray,
    justifyContent: 'flex-end',
  },
  fontStyle: {
    color: colors.black,
    fontFamily: font.roboto,
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
    height: 90,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.lightGrey,
    borderWidth: 1,
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
    fontFamily: font.roboto,
  },
  marginLeft: {
    marginLeft: 30,
  },
  justifyContent: {
    justifyContent: 'center',
  },
  standardFont: {
    fontSize: font.searchFont,
    fontFamily: font.roboto,
    color: colors.black,
  },
  backgroundColor: {
    backgroundColor: colors.white,
  },
  border_style: {
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
  },
  listView: {
    width: standardFormat.searchWidth,
  },
  subMarginTop: {
    marginTop: 3,
  },
  nameStyle: {
    fontSize: font.searchFont,
    fontWeight: font.fontBold,
    fontFamily: font.roboto,
    color: colors.black,
  },
  marginBottom: {
    marginBottom: 10,
  },
  RSText: {
    fontSize: font.rsTextSize,
    fontWeight: font.fontBold,
    color: colors.black,
    fontFamily: font.SairaCondensedExtraBold,
  },
  imageSlider: {
    flex: 1,
    alignItems: 'center',
  },
  paddingHorizontal: {
    paddingLeft: 10,
  },
  forgotPassword: {
    fontFamily: font.roboto,
    fontWeight: standardFormat.medium,
    marginTop: standardFormat.marginVertical,
    width: width / 1.2,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
  },
  flex: {
    flex: 1,
  },
  commonMarginBottom: {
    paddingBottom: 50,
  },
  paddingBottom: {
    paddingBottom: 20,
  },
  rsStyle: {
    fontFamily: font.roboto,
    fontSize: font.rsFontSize,
    fontWeight: font.fontBold,
  },
  fulfiled: {
    fontFamily: font.roboto,
    fontSize: font.standardFontSize,
  },
  height: {
    height: 90,
  },
  fontMedium: {
    fontWeight: standardFormat.medium,
  },
});

export default CommonStyles;
