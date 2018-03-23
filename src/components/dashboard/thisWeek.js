import React from 'react';
import { View, Text, Image } from 'react-native';
import constantsText from '../../constants/constantsText';
import BasicStyles from './BasicStyles';
import CommonStyles from '../../assets/CommonStyles';

const ThisWeek = () => (
  <View
    style={CommonStyles.background}
  >
    <View style={BasicStyles.margin}>
      <Text style={BasicStyles.fontStyle}>{constantsText.totalSale}</Text>
      <Text style={BasicStyles.RSText}>US$0.00</Text>
      <Text style={BasicStyles.fontStyle}>0 Orders</Text>
      <Image
        style={BasicStyles.orderImage}
      />
    </View>

  </View>
);

export default ThisWeek;
