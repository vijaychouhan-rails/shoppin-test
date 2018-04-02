import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const BasicStyles = StyleSheet.create({
  tabView: {
    margin: 20,
    flex: 1,
    backgroundColor: colors.white,
  },
  tab: {
    height: 35,
    borderRadius: 5,
    overflow: 'hidden',
    borderBottomWidth: 1,
    backgroundColor: colors.bluecolor,
    borderColor: colors.bluecolor,
  },
  active_tab_style: {
    backgroundColor: colors.white,
    borderColor: colors.bluecolor,
    borderWidth: 1,
  },
  tab_style: {
    backgroundColor: colors.bluecolor,
    borderColor: colors.bluecolor,
    borderWidth: 1,
  },
  labelStyle: {
    color: colors.bluecolor,
  },
  container: {
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  underLineColor: {
    backgroundColor: colors.bluecolor,
  },
});

export default BasicStyles;
