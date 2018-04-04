import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import constantsText from '../../constants/constantsText';
import BasicStyles from './BasicStyles';
import CommonStyles from '../../assets/CommonStyles';
import { BAGS } from '../../constants/images';

const ThisWeek = () => (
  <View
    style={CommonStyles.background}
  >
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={BasicStyles.margin}>
        <Text style={BasicStyles.fontStyle}>{constantsText.totalSale}
        </Text>
        <Text style={CommonStyles.RSText}>{constantsText.product_price}
        </Text>
        <Text style={BasicStyles.fontStyle}>{constantsText.no_of_orders}
        </Text>
        <Image
          source={BAGS}
          style={BasicStyles.orderImage}
        />
      </View>
    </ScrollView>
  </View>
);

export default ThisWeek;
