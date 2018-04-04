import React, { Component } from 'react';
import { Container } from 'native-base';
import { View, Text, ScrollView, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonStyles from '../../assets/CommonStyles';
import HeaderView from '../../components/header/header';
import BasicStyles from './BasicStyles';
import constantsText from '../../constants/constantsText';
import { PROFILE_PIC } from '../../constants/images';

class OrderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showProductList = this.showProductList.bind(this);
  }

  showProductList() {
    const { orders } = this.props;
    return (
      <FlatList
        data={orders}
        renderItem={listItem => (
          <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween,
            BasicStyles.paddingRight, BasicStyles.marginTop, CommonStyles.centerContent]}
          >
            <View style={[CommonStyles.directionRow, CommonStyles.centerContent]}>
              <Image
                style={CommonStyles.imageStyle}
              />
              <View style={[CommonStyles.directionRow, CommonStyles.centerContent,
                BasicStyles.paddingVertical, CommonStyles.border, CommonStyles.spaceBetween,
                CommonStyles.flex]}
              >
                <View style={[BasicStyles.marginTop, BasicStyles.marginLeft]}>
                  <Text style={CommonStyles.fontStyle}>
                    {listItem.item.title}
                  </Text>
                  <Text style={[BasicStyles.margin, CommonStyles.fontStyle]}>
                    Size: {listItem.item.size}
                  </Text>
                  <Text style={[BasicStyles.margin, CommonStyles.fontColor,
                    CommonStyles.standardFontSize]}
                  >
                    {listItem.item.price}
                  </Text>
                </View>
                <TouchableOpacity style={BasicStyles.circleIcon}>
                  <Text style={BasicStyles.circleIconText}>2</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <Container style={[CommonStyles.background, CommonStyles.commonMarginBottom]}>
        <HeaderView title={params.hash} />
        <ScrollView style={CommonStyles.marginBoth} showsVerticalScrollIndicator={false}>
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
            <Text style={[CommonStyles.fontColor, CommonStyles.standardFontSize]}>{params.payment}
            </Text>
            <Text style={[CommonStyles.fontColor, CommonStyles.marginLeft,
              CommonStyles.standardFontSize]}
            >
              {params.fulfiled}
            </Text>
          </View>
          <TouchableOpacity
            style={[CommonStyles.border_style, BasicStyles.marginTop]}
            onPress={() => Actions.customer_details(params.name)}
          >
            <Text style={[BasicStyles.marginTop, BasicStyles.nameStyle, CommonStyles.fontBold]}>
              {constantsText.customer}
            </Text>
            <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween, BasicStyles.padding,
              CommonStyles.centerContent]}
            >
              <View style={CommonStyles.directionRow}>
                <Image
                  style={BasicStyles.customer_image}
                  source={PROFILE_PIC}
                />
                <View style={[BasicStyles.marginLeft, CommonStyles.justifyContent]}>
                  <Text style={[BasicStyles.nameStyle, CommonStyles.fontBold]}>
                    {params.name}
                  </Text>
                  <Text style={[CommonStyles.fontColor, CommonStyles.marginTop,
                    CommonStyles.standardFontSize]}
                  >
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
          </TouchableOpacity>
          <Text style={[BasicStyles.nameStyle, CommonStyles.fontBold, BasicStyles.marginTop]}>
            {constantsText.shippingAddressText}
          </Text>
          <Text style={[BasicStyles.fontStyle, BasicStyles.marginTop]}>{params.name}</Text>
          <TextInput
            multiline
            numberOfLines={4}
            style={[BasicStyles.fontStyle, BasicStyles.addressWidth]}
            editable={false}
            value={constantsText.shippingAddress}
          />
          <Text style={[BasicStyles.nameStyle, CommonStyles.fontBold, BasicStyles.marginTop]}>
            {constantsText.billingAddressText}
          </Text>
          <Text style={[CommonStyles.fontStyle, BasicStyles.marginTop]}>{params.name}</Text>
          <TextInput
            multiline
            numberOfLines={4}
            style={[BasicStyles.fontStyle, BasicStyles.addressWidth]}
            underlineColorAndroid="transparent"
            editable={false}
            value={constantsText.shippingAddress}
          />
          <Text style={[BasicStyles.nameStyle, CommonStyles.fontBold, BasicStyles.marginTop]}>
            {constantsText.contact}
          </Text>
          <Text style={[BasicStyles.fontStyle, BasicStyles.marginTop]}>
            {constantsText.emailID}
          </Text>
          <View style={[CommonStyles.directionRow,
            CommonStyles.marginTop, CommonStyles.spaceBetween]}
          >
            <Text style={[BasicStyles.nameStyle, BasicStyles.marginTop]}>
              {constantsText.title}
            </Text>
            <Text style={[CommonStyles.fulfiled, BasicStyles.sub_margin_top]}>
              {params.fulfiled}
            </Text>
          </View>
          <Text style={[CommonStyles.fontColor, BasicStyles.marginTop,
            CommonStyles.standardFontSize]}
          >
            {constantsText.estimate_delivery_date}
          </Text>
          <Text style={[CommonStyles.fontStyle, CommonStyles.fontBold, CommonStyles.marginTop]}>
            {constantsText.delivery_date_unavailable}
          </Text>
          <Text style={[CommonStyles.fontColor, BasicStyles.marginTop,
            CommonStyles.standardFontSize]}
          >
            {constantsText.tracking_number}
          </Text>
          <Text style={[BasicStyles.fontStyle, CommonStyles.fontBold, CommonStyles.marginTop]}>
            {constantsText.tracking_number_text}
          </Text>
          {this.showProductList()}
          <View style={[CommonStyles.directionRow, BasicStyles.view_border_style,
            CommonStyles.marginTop, CommonStyles.spaceBetween]}
          >
            <Text style={[BasicStyles.nameStyle, BasicStyles.marginTop,
              CommonStyles.fontBold]}
            >
              {constantsText.orderSummadry}
            </Text>
            <Text style={[CommonStyles.fontStyle, BasicStyles.marginTop]}>
              {params.payment}
            </Text>
          </View>
          <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween]}>
            <Text style={[BasicStyles.fontStyle, BasicStyles.marginTop]}>
              {constantsText.sub_total_text}
            </Text>
            <Text style={[BasicStyles.fontStyle, BasicStyles.marginTop]}>
              {constantsText.sub_total_amt}
            </Text>
          </View>
          <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween]}>
            <Text style={[BasicStyles.fontStyle, CommonStyles.marginTop]}>
              {constantsText.shipping_charge_text}
            </Text>
            <Text style={[BasicStyles.fontStyle, CommonStyles.marginTop]}>
              {constantsText.shipping_charge}
            </Text>
          </View>
          <View style={[CommonStyles.border, CommonStyles.paddingBottom]}>
            <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween]}>
              <Text style={[BasicStyles.fontStyle, CommonStyles.marginTop, CommonStyles.fontBold]}>
                {constantsText.total_text}
              </Text>
              <Text style={[BasicStyles.fontStyle, CommonStyles.marginTop, CommonStyles.fontBold]}>
                {constantsText.total}
              </Text>
            </View>
            <Text style={[BasicStyles.nameStyle, BasicStyles.marginTop, CommonStyles.fontBold]}>
              {constantsText.note}
            </Text>
            <Text style={[BasicStyles.fontStyle, BasicStyles.marginTop]}>
              {constantsText.note_content}
            </Text>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.get('order_details').toJS(),
});

OrderDetails.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
  orders: PropTypes.instanceOf(Array).isRequired,
};


export default connect(mapStateToProps)(OrderDetails);
