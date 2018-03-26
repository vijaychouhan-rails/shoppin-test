import React, { Component } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderView from '../../components/header/header';
import constantsText from '../../constants/constantsText';
import FooterView from '../../components/footer/footer';
import CommonStyles from '../../assets/CommonStyles';
import BasicStyles from './BasicStyles';

class Orders extends Component {
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
          <View style={[BasicStyles.listView, BasicStyles.marginTop]}>
            <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween]}>
              <View>
                <Text style={BasicStyles.textStyle}>{listItem.item.date}</Text>
                <Text style={[BasicStyles.textStyle, BasicStyles.subMarginTop]}>
                  {listItem.item.hash}
                </Text>
              </View>
              <TouchableOpacity onPress={() => Actions.order_details(listItem.item)}>
                <Icon
                  name="angle-right"
                  style={CommonStyles.rightIcon}
                  size={30}
                />
              </TouchableOpacity>


            </View>
            <View style={[
              BasicStyles.listView,
              BasicStyles.directionRow,
              BasicStyles.marginTop,
              CommonStyles.spaceBetween]}
            >
              <Text style={BasicStyles.nameStyle}>
                {listItem.item.name}
              </Text>
              <Text style={BasicStyles.nameStyle}>
                {listItem.item.rs}
              </Text>
            </View>
            <View style={[CommonStyles.directionRow, BasicStyles.marginTop,
              BasicStyles.marginBottom]}
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
      <Container
        style={CommonStyles.background}
      >
        <HeaderView title={constantsText.orders} />
        <Content>
          <View
            style={CommonStyles.searchView}
          >
            <Icon
              name="search"
              style={CommonStyles.searchIcon}
              size={20}
            />
            <TextInput
              style={CommonStyles.search}
              placeholder={constantsText.search}
            />
            <Icon
              name="microphone"
              style={CommonStyles.microphone}
              size={20}
            />
          </View>
          {this.showList()}
        </Content>
        <FooterView />
      </Container>
    );
  }
}
Orders.propTypes = {
  orders: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => ({
  orders: state.get('orders').toJS(),
});


export default connect(mapStateToProps)(Orders);
