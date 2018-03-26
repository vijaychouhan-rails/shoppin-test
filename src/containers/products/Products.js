import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Container, Content } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderView from '../../components/header/header';
import constantsText from '../../constants/constantsText';
import FooterView from '../../components/footer/footer';
import CommonStyles from '../../assets/CommonStyles';
import ProductsList from '../../components/products/products-list';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: ['All Products', 'Collections'],
    };
  }

  render() {
    return (
      <Container
        style={CommonStyles.background}
      >
        <HeaderView title={constantsText.products} />
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
          <ProductsList productList={this.state.productList} />
        </Content>
        <FooterView />
      </Container>
    );
  }
}

export default Products;