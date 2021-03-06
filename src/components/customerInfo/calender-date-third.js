import React from 'react';
import { View, Text } from 'react-native';
import constantsText from '../../constants/constantsText';
import CommonStyles from '../../assets/CommonStyles';
import BasicStyles from './BasicStyles';

const CalenderDateSecond = () => (
  <View style={[CommonStyles.backgroundColor, BasicStyles.background_styles]}>
    <Text style={[CommonStyles.fontColor, BasicStyles.fontSize,
      CommonStyles.fontBold]}
    >
      {constantsText.lastOrder}
    </Text>
    <Text style={BasicStyles.RSText}>{constantsText.date}</Text>
    <Text style={[CommonStyles.fontColor, CommonStyles.fontBold, BasicStyles.fontSize]}>
      {constantsText.no_of_orders}
    </Text>
  </View>
);

export default CalenderDateSecond;
