import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
// import standardFormat from '../../constants/standardFormat';

const BasicStyles = StyleSheet.create({
  tabView: {
    margin: 20,
    flex: 1,
    backgroundColor: colors.white,
  },
  tab: {
    height: 40,
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: colors.white,
    borderColor: colors.bluecolor,
  },
  tabStyle: {
    backgroundColor: colors.white,
    borderColor: colors.bluecolor,
    borderWidth: 1,
  },
  labelStyle: {
    flex: 1,
    backgroundColor: colors.bluecolor,
  },
  indicator: {
    backgroundColor: colors.bluecolor,
  }
});

export default BasicStyles;
