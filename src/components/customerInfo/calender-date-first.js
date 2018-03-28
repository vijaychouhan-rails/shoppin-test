import React from 'react';
import { View, Text } from 'react-native';
import constantsText from '../../constants/constantsText';
import CommonStyles from '../../assets/CommonStyles';
import BasicStyles from './BasicStyles';

const CalenderDateFirst = () => (
  <View style={[CommonStyles.backgroundColor, BasicStyles.background_styles]}>
    <Text style={[CommonStyles.fontColor, CommonStyles.fontBold]}>{constantsText.lastOrder}</Text>
    <Text style={CommonStyles.RSText}>{constantsText.date}</Text>
    <Text style={[CommonStyles.fontColor, CommonStyles.fontBold]}>
      {constantsText.no_of_orders}
    </Text>
  </View>
);

export default CalenderDateFirst;
