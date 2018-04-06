import React, { Component } from 'react';
import { View, TextInput, ScrollView, Dimensions } from 'react-native';
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

const { height } = Dimensions.get('window');

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={CommonStyles.searchView}
          >
            <Icon
              name="search"
              style={CommonStyles.searchIcon}
              size={height / 50}
            />
            <TextInput
              style={CommonStyles.search}
              placeholder={constantsText.search}
              placeholderTextColor={colors.gray}

            />
            <Icon
              name="microphone"
              style={CommonStyles.microphone}
              size={height / 40}
            />
          </View>
          <ProductsList productList={this.props.product_list} />
        </ScrollView>
        <FooterView products={this.state.isShow} />
      </Container>
    );
  }
}
Products.propTypes = {
  product_list: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => ({
  product_list: state.get('product_list').toJS(),
});

export default connect(mapStateToProps)(Products);
