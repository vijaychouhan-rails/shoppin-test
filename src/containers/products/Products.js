import React, { Component } from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import { Container } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderView from '../../components/header/header';
import constantsText from '../../constants/constantsText';
import FooterView from '../../components/footer/footer';
import CommonStyles from '../../assets/CommonStyles';
import ProductsList from '../../components/products/products-list';
import colors from '../../constants/colors';


class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: 1,
    };
  }

  render() {
    return (
      <Container
        style={CommonStyles.background}
      >
        <HeaderView title={constantsText.products} />
        <ScrollView>
          <View
            style={CommonStyles.searchView}
          >
            <Icon
              name="search"
              style={CommonStyles.searchIcon}
              size={16}
            />
            <TextInput
              style={CommonStyles.search}
              placeholder={constantsText.search}
              placeholderTextColor={colors.gray}

            />
            <Icon
              name="microphone"
              style={CommonStyles.microphone}
              size={20}
            />
          </View>
          <ProductsList productList={this.props.productList} />
        </ScrollView>
        <FooterView products={this.state.isShow} />
      </Container>
    );
  }
}
Products.propTypes = {
  productList: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => {
  debugger
  return {
    productList: state.get('productList').toJS(),
  }
}
export default connect(mapStateToProps)(Products);
