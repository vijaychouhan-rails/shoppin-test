import React, { Component } from 'react';
import { Container } from 'native-base';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonStyles from '../../assets/CommonStyles';
import HeaderView from '../../components/header/header';
import BasicStyles from './BasicStyles';
import constantsText from '../../constants/constantsText';


class OrderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <Container style={CommonStyles.background}>
        <HeaderView title={params.hash} />
        <ScrollView style={CommonStyles.marginTop}>
          <View style={[CommonStyles.flexStyle, CommonStyles.marginTop]}>
            <Text style={[CommonStyles.standardFont, CommonStyles.fontBold]}>
              {constantsText.order}
            </Text>
          </View>
          <View style={CommonStyles.marginTop}>
            <Text style={[CommonStyles.standardFont, CommonStyles.fontBold]}>
              {constantsText.orderDate}
            </Text>
          </View>
          <View style={[CommonStyles.directionRow, CommonStyles.marginTop]}>
            <Text style={CommonStyles.fontColor}>{params.payment}</Text>
            <Text style={[CommonStyles.fontColor, CommonStyles.marginLeft]}>{params.fulfiled}</Text>
          </View>
          <Text style={[CommonStyles.marginTop, CommonStyles.standardFont, CommonStyles.fontBold]}>
            {constantsText.customer}
          </Text>
          <View style={[CommonStyles.directionRow, BasicStyles.marginTop,
            CommonStyles.spaceBetween, CommonStyles.centerContent]}
          >
            <View style={CommonStyles.directionRow}>
              <Image
                style={BasicStyles.customer_image}
              />
              <View style={[BasicStyles.marginLeft, CommonStyles.justifyContent]}>
                <Text style={[CommonStyles.standardFont, CommonStyles.fontBold]}>
                  {params.name}
                </Text>
                <Text style={[CommonStyles.fontColor, CommonStyles.marginTop]}>
                  {params.no_of_orders} {constantsText.orders}
                </Text>
              </View>
            </View>
            <Icon
              name="angle-right"
              style={CommonStyles.rightIcon}
              size={30}
            />
          </View>
          <Text style={[CommonStyles.standardFont, CommonStyles.fontBold, BasicStyles.marginTop]}>
            {constantsText.shippingAddressText}
          </Text>
          <Text style={[CommonStyles.fontColor, CommonStyles.marginTop]}>{params.name}</Text>
          <TextInput
            multiline
            numberOfLines={4}
            style={[CommonStyles.fontColor, BasicStyles.addressWidth]}
            editable={false}
            value={constantsText.shippingAddress}
          />
          <Text style={[CommonStyles.standardFont, CommonStyles.fontBold, BasicStyles.marginTop]}>
            {constantsText.billingAddressText}
          </Text>
          <Text style={[CommonStyles.fontColor, CommonStyles.marginTop]}>{params.name}</Text>
          <TextInput
            multiline
            numberOfLines={4}
            style={[CommonStyles.fontColor, BasicStyles.addressWidth]}
            editable={false}
            value={constantsText.shippingAddress}
          />
          <Text style={[CommonStyles.standardFont, CommonStyles.fontBold, BasicStyles.marginTop]}>
            {constantsText.contact}
          </Text>
          <Text style={[CommonStyles.fontColor, CommonStyles.marginTop]}>
            {constantsText.emailID}
          </Text>
        </ScrollView>
      </Container>
    );
  }
}
OrderDetails.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};


export default OrderDetails;
