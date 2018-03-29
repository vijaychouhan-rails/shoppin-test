import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import constantsText from '../../constants/constantsText';
import BasicStyles from './BasicStyles';
import CommonStyles from '../../assets/CommonStyles';

const Yesterday = () => (
  <View
    style={CommonStyles.background}
  >
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={BasicStyles.margin}>
        <Text style={[BasicStyles.fontStyle, CommonStyles.marginTop]}>{constantsText.totalSale}
        </Text>
        <Text style={[CommonStyles.RSText, CommonStyles.marginTop]}>{constantsText.product_price}
        </Text>
        <Text style={[BasicStyles.fontStyle, CommonStyles.marginTop]}>{constantsText.no_of_orders}
        </Text>
        <Image
          style={BasicStyles.orderImage}
        />
      </View>
    </ScrollView>
  </View>
);

export default Yesterday;
