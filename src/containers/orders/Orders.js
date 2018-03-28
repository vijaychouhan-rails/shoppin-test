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
import colors from '../../constants/colors';


class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: 1,
    };
    this.showList = this.showList.bind(this);
  }
  showList() {
    const { orders } = this.props;
    return (
      <FlatList
        data={orders}
        renderItem={listItem => (
          <TouchableOpacity
            style={[CommonStyles.listView, CommonStyles.marginTop,
              CommonStyles.border]}
            onPress={() => Actions.order_details(listItem.item)}
          >
            <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween]}>
              <View>
                <Text style={BasicStyles.textStyle}>{listItem.item.date}</Text>
                <Text style={[BasicStyles.textStyle, BasicStyles.marginTop]}>
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
              CommonStyles.listView,
              CommonStyles.directionRow,
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
              <Text style={[CommonStyles.fontColor, CommonStyles.standardFontSize]}>
                {listItem.item.payment}
              </Text>
              <Text style={[CommonStyles.fontColor, CommonStyles.marginLeft,
                CommonStyles.standardFontSize]}
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
              size={16}
            />
            <TextInput
              style={[CommonStyles.search, BasicStyles.searchMargin]}
              placeholder={constantsText.search}
              placeholderTextColor={colors.gray}
            />
            <Icon
              name="microphone"
              style={CommonStyles.microphone}
              size={20}
            />
          </View>
          {this.showList()}
        </Content>
        <FooterView orders={this.state.isShow} />
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
