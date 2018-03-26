import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Container, Content } from 'native-base';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderView from '../../components/header/header';
import constantsText from '../../constants/constantsText';
import FooterView from '../../components/footer/footer';
import CommonStyles from '../../assets/CommonStyles';
import CollectioList from '../../components/collections/collections-list';

class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionList: [{ product_name: 'Swarovki Crystals', no_of_products: '19 Products' },
        { product_name: 'Tools & Accessories', no_of_products: '16 Products' }],
      all_products: [{ product_name: 'Super Glue for flip flop', no_of_products: '100 in stock' },
        { product_name: 'Swarovki Crystals 001', no_of_products: '150 inStock', variants: '150 in variants' }],
    };
  }
  render() {
    return (
      <Container
        style={CommonStyles.background}
      >
        <HeaderView title={this.props.data} />
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
          <CollectioList collectionList={this.props.data === 'All Products' ?
            this.state.all_products : this.state.collectionList}
          />
        </Content>
        <FooterView />
      </Container>
    );
  }
}

Collections.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Collections;
