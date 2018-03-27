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
  search: {
    flex: 1,
    fontSize: font.searchFont,
    color: colors.black,
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
    color: colors.greyColor,
    marginRight: 5,
  },
  microphone: {
    color: colors.greyColor,
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
    backgroundColor: colors.lightGrey,
  },
  fontBold: {
    fontWeight: font.fontBold,
  },
  marginTop: {
    marginTop: 7,
  },
  fontColor: {
    fontSize: font.fontSize,
    color: colors.greyColor,
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
    borderColor: colors.lightGrey,
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
});

export default CommonStyles;
