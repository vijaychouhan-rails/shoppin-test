import React, { Component } from 'react';
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import constantsText from '../../constants/constantsText';
import HeaderView from '../../components/header/header';
import CommonStyles from '../../assets/CommonStyles';
import BasicStyles from './BasicStyles';

class CustomerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showList = this.showList.bind(this);
  }

  showList() {
    const { orders } = this.props;
    return (
      <FlatList
        data={orders}
        renderItem={listItem => (
          <View style={[CommonStyles.listView, BasicStyles.marginTop]}>
            <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween]}>
              <View>
                <Text style={BasicStyles.textStyle}>{listItem.item.date}</Text>
                <Text style={[BasicStyles.textStyle, CommonStyles.subMarginTop]}>
                  {listItem.item.hash}
                </Text>
              </View>
              <TouchableOpacity>
                <Icon
                  name="angle-right"
                  style={CommonStyles.rightIcon}
                  size={30}
                />
              </TouchableOpacity>
            </View>
            <View style={[
              CommonStyles.listView,
              CommonStyles.directionRow,
              BasicStyles.marginTop,
              CommonStyles.spaceBetween]}
            >
              <Text style={CommonStyles.nameStyle}>
                {listItem.item.name}
              </Text>
              <Text style={CommonStyles.nameStyle}>
                {listItem.item.rs}
              </Text>
            </View>
            <View style={[CommonStyles.directionRow, BasicStyles.marginTop,
              CommonStyles.marginBottom]}
            >
              <Text style={CommonStyles.fontColor}>
                {listItem.item.payment}
              </Text>
              <Text style={[CommonStyles.fontColor, CommonStyles.marginLeft]}>
                {listItem.item.fulfiled}
              </Text>
            </View>
          </View>
        )}
      />
    );
  }

  render() {
    return (
      <Container style={CommonStyles.backgroundColor}>
        <HeaderView title={this.props.data} />
        <ScrollView style={[CommonStyles.marginTop, CommonStyles.marginBottom]}>

          <View style={[CommonStyles.directionRow, BasicStyles.marginTop, CommonStyles.border_style,
            CommonStyles.marginBottom, CommonStyles.spaceBetween, CommonStyles.centerContent]}
          >
            <View>
              <Text style={[CommonStyles.standardFont, CommonStyles.fontBold]}>
                {this.props.data}
              </Text>
              <Image
                style={BasicStyles.customer_image}
              />
              <View style={[BasicStyles.marginLeft, CommonStyles.justifyContent]}>
                <Text style={[CommonStyles.fontColor, CommonStyles.marginTop]}>
                  {constantsText.address}
                </Text>
                <Text style={CommonStyles.fontColor}>
                  {constantsText.month}
                </Text>
              </View>
            </View>
          </View>
          <Text style={[CommonStyles.standardFont, BasicStyles.marginTop, CommonStyles.fontBold]}>
            {constantsText.note}
          </Text>
          <Text style={[CommonStyles.fontStyle, BasicStyles.marginTop]}>
            {constantsText.note_content}
          </Text>
          <Text style={[CommonStyles.standardFont, BasicStyles.marginTop, CommonStyles.fontBold]}>
            {constantsText.recenOrders}
          </Text>
          {this.showList()}
          <Text style={[CommonStyles.standardFont, CommonStyles.fontBold, CommonStyles.marginTop]}>
            {constantsText.contact}
          </Text>
          <Text style={[CommonStyles.fontColor, CommonStyles.marginTop]}>
            {constantsText.email}
          </Text>
          <Text style={CommonStyles.fontStyle}>
            {constantsText.emailID}
          </Text>
          <Text style={[CommonStyles.fontColor, BasicStyles.extraMarginTop]}>
            {constantsText.email}
          </Text>
          <Text style={CommonStyles.fontStyle}>
            {constantsText.address1}
          </Text>
          <Text style={CommonStyles.fontStyle}>
            {constantsText.address2}
          </Text>
          <Text style={CommonStyles.fontStyle}>
            {constantsText.address3}
          </Text>
        </ScrollView>
      </Container>
    );
  }
}

CustomerInfo.propTypes = {
  data: PropTypes.string.isRequired,
  orders: PropTypes.instanceOf(Array).isRequired,

};

const mapStateToProps = state => ({
  orders: state.get('orders').toJS(),
});

export default connect(mapStateToProps)(CustomerInfo);