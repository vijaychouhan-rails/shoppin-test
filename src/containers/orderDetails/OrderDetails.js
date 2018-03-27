import React, { Component } from 'react';
import { Container } from 'native-base';
import { View, Text, ScrollView, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonStyles from '../../assets/CommonStyles';
import HeaderView from '../../components/header/header';
import BasicStyles from './BasicStyles';
import constantsText from '../../constants/constantsText';

class OrderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        { title: 'title', size: 'L', price: '40 $' },
        { title: 'title', size: 'L', price: '40 $' },
        { title: 'title', size: 'L', price: '40 $' },
      ],
    };
    this.showProductList = this.showProductList.bind(this);
  }

  showProductList() {
    return (
      <FlatList
        data={this.state.orders}
        renderItem={listItem => (
          <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween,
            BasicStyles.marginTop, CommonStyles.centerContent]}
          >
            <View style={[CommonStyles.directionRow, CommonStyles.centerContent]}>
              <Image
                style={CommonStyles.imageStyle}
              />
              <View style={BasicStyles.marginTop}>
                <Text style={[BasicStyles.textStyle, BasicStyles.fontStyle]}>
                  {listItem.item.title}
                </Text>
                <Text style={BasicStyles.margin}>Size: {listItem.item.size}</Text>
                <Text style={BasicStyles.margin}>{listItem.item.price}</Text>
              </View>
            </View>
            <TouchableOpacity style={BasicStyles.circleIcon}>
              <Text>2</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index}
      />
    );
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <Container style={CommonStyles.background}>
        <HeaderView title={params.hash} />
        <ScrollView style={CommonStyles.marginTop}>
          <View style={[CommonStyles.flexStyle, BasicStyles.marginTop]}>
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
          <Text style={[BasicStyles.marginTop, CommonStyles.standardFont, CommonStyles.fontBold]}>
            {constantsText.customer}
          </Text>
          <View style={[CommonStyles.directionRow, BasicStyles.marginTop, CommonStyles.border_style,
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
            <TouchableOpacity onPress={() => Actions.customer_details(params.name)}>
              <Icon
                name="angle-right"
                style={CommonStyles.rightIcon}
                size={30}
              />
            </TouchableOpacity>
          </View>
          <Text style={[CommonStyles.standardFont, BasicStyles.fontBold, BasicStyles.marginTop]}>
            {constantsText.shippingAddressText}
          </Text>
          <Text style={CommonStyles.fontStyle}>{params.name}</Text>
          <TextInput
            multiline
            numberOfLines={4}
            style={[CommonStyles.fontStyle, BasicStyles.addressWidth]}
            editable={false}
            value={constantsText.shippingAddress}
          />
          <Text style={[CommonStyles.standardFont, BasicStyles.fontBold, CommonStyles.marginTop]}>
            {constantsText.billingAddressText}
          </Text>
          <Text style={[CommonStyles.fontStyle, CommonStyles.marginTop]}>{params.name}</Text>
          <TextInput
            multiline
            numberOfLines={4}
            style={[CommonStyles.fontStyle, BasicStyles.addressWidth]}
            underlineColorAndroid="transparent"
            editable={false}
            value={constantsText.shippingAddress}
          />
          <Text style={[CommonStyles.standardFont, CommonStyles.fontBold, CommonStyles.marginTop]}>
            {constantsText.contact}
          </Text>
          <Text style={[CommonStyles.fontStyle, BasicStyles.marginTop]}>
            {constantsText.emailID}
          </Text>
          <View style={[CommonStyles.directionRow, BasicStyles.view_border_style,
            CommonStyles.marginTop, CommonStyles.spaceBetween]}
          >
            <Text style={[CommonStyles.standardFont, BasicStyles.marginTop]}>
              {constantsText.title}
            </Text>
            <Text style={[CommonStyles.fontStyle, BasicStyles.sub_margin_top]}>
              {params.fulfiled}
            </Text>
          </View>
          <Text style={[CommonStyles.fontColor, BasicStyles.marginTop]}>
            {constantsText.estimate_delivery_date}
          </Text>
          <Text style={[CommonStyles.fontStyle, CommonStyles.fontBold]}>
            {constantsText.delivery_date_unavailable}
          </Text>
          <Text style={[CommonStyles.fontColor, BasicStyles.marginTop]}>
            {constantsText.tracking_number}
          </Text>
          <Text style={[CommonStyles.fontStyle, CommonStyles.fontBold]}>
            {constantsText.tracking_number_text}
          </Text>
          {this.showProductList()}
          <View style={[CommonStyles.directionRow, BasicStyles.view_border_style,
            CommonStyles.marginTop, CommonStyles.spaceBetween]}
          >
            <Text style={[CommonStyles.standardFont, BasicStyles.marginTop,
              CommonStyles.fontBold]}
            >
              {constantsText.orderSummadry}
            </Text>
            <Text style={[CommonStyles.fontStyle, BasicStyles.sub_margin_top]}>
              {params.payment}
            </Text>
          </View>
          <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween]}>
            <Text style={[CommonStyles.fontStyle, BasicStyles.marginTop]}>
              {constantsText.sub_total_text}
            </Text>
            <Text style={[CommonStyles.fontStyle, CommonStyles.marginTop]}>
              {constantsText.sub_total_text}
            </Text>
          </View>
          <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween]}>
            <Text style={[CommonStyles.fontStyle, CommonStyles.marginTop, CommonStyles.fontBold]}>
              {constantsText.shipping_charge_text}
            </Text>
            <Text style={[CommonStyles.fontStyle, CommonStyles.marginTop, CommonStyles.fontBold]}>
              {constantsText.shipping_charge}
            </Text>
          </View>
          <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween]}>
            <Text style={[CommonStyles.fontStyle, CommonStyles.marginTop, CommonStyles.fontBold]}>
              {constantsText.total_text}
            </Text>
            <Text style={[CommonStyles.fontStyle, CommonStyles.marginTop, CommonStyles.fontBold]}>
              {constantsText.total}
            </Text>
          </View>
          <Text style={[CommonStyles.standardFont, BasicStyles.marginTop, CommonStyles.fontBold]}>
            {constantsText.note}
          </Text>
          <Text style={[CommonStyles.fontStyle, BasicStyles.marginTop]}>
            {constantsText.note_content}
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
