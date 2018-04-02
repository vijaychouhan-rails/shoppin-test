import React, { Component } from 'react';
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';
import constantsText from '../../constants/constantsText';
import HeaderView from '../../components/header/header';
import CalenderDateFirst from '../../components/customerInfo/calender-date-first';
import CalenderDateSecond from '../../components/customerInfo/calender-date-second';
import CalenderDateThird from '../../components/customerInfo/calender-date-third';
import CommonStyles from '../../assets/CommonStyles';
import BasicStyles from './BasicStyles';
import colors from '../../constants/colors';


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
          <TouchableOpacity style={[CommonStyles.listView, BasicStyles.marginTop,
            CommonStyles.border]}
          >
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
              <Text style={[CommonStyles.fontColor, CommonStyles.marginTop]}>
                {listItem.item.payment}
              </Text>
              <Text style={[CommonStyles.fontColor, CommonStyles.marginLeft,
                CommonStyles.marginTop]}
              >
                {listItem.item.fulfiled}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }

  render() {
    return (
      <Container style={[CommonStyles.backgroundColor, BasicStyles.flex]}>
        <HeaderView title={this.props.data} />
        <ScrollView
          style={[CommonStyles.marginTop, CommonStyles.marginBottom, BasicStyles.flex]}
          showsVerticalScrollIndicator={false}
        >
          <View style={[CommonStyles.directionRow, BasicStyles.marginTop, BasicStyles.border_style,
            CommonStyles.marginBottom, CommonStyles.spaceBetween, CommonStyles.centerContent]}
          >
            <View style={BasicStyles.marginBottom}>
              <Text style={[CommonStyles.standardFont, CommonStyles.fontBold,
                BasicStyles.marginBottom]}
              >
                {this.props.data}
              </Text>
              <View style={CommonStyles.directionRow}>
                <Image
                  style={BasicStyles.customer_image}
                />
                <View style={[BasicStyles.marginLeft, CommonStyles.justifyContent]}>
                  <Text style={CommonStyles.fontColor}>
                    {constantsText.address}
                  </Text>
                  <Text style={[CommonStyles.fontColor, CommonStyles.marginTop]}>
                    {constantsText.month}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={[CommonStyles.standardFont, BasicStyles.marginTop, CommonStyles.fontBold,
            BasicStyles.marginBottom]}
          >
            {constantsText.note}
          </Text>
          <Text style={[CommonStyles.fontStyle, BasicStyles.marginTop]}>
            {constantsText.note_content}
          </Text>
          <View style={[BasicStyles.sliderView, CommonStyles.centerContent]}>
            <View style={[CommonStyles.imageSlider, BasicStyles.imageSlider]}>
              <Swiper
                showsButtons={false}
                activeDotColor={colors.black}
                showsPagination
                scrollEnabled
              >
                <CalenderDateFirst />
                <CalenderDateSecond />
                <CalenderDateThird />
              </Swiper>
            </View>
          </View>
          <Text style={[CommonStyles.standardFont, BasicStyles.marginTop, CommonStyles.fontBold,
            BasicStyles.marginBottom]}
          >
            {constantsText.recenOrders}
          </Text>
          {this.showList()}
          <Text style={[CommonStyles.standardFont, CommonStyles.fontBold, CommonStyles.marginTop]}>
            {constantsText.contact}
          </Text>
          <Text style={[CommonStyles.fontColor, CommonStyles.marginTop]}>
            {constantsText.email}
          </Text>
          <Text style={[CommonStyles.fontStyle, CommonStyles.fontBold]}>
            {constantsText.emailID}
          </Text>
          <Text style={[CommonStyles.fontColor, BasicStyles.extraMarginTop]}>
            {constantsText.address}
          </Text>
          <Text style={[CommonStyles.fontStyle, CommonStyles.fontBold]}>
            {constantsText.address1}
          </Text>
          <Text style={[CommonStyles.fontStyle, CommonStyles.fontBold]}>
            {constantsText.address2}
          </Text>
          <Text style={[CommonStyles.fontStyle, CommonStyles.fontBold]}>
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
