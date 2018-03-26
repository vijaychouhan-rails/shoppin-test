import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Container, Content } from 'native-base';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderView from '../../components/header/header';
import constantsText from '../../constants/constantsText';
import FooterView from '../../components/footer/footer';
import CommonStyles from '../../assets/CommonStyles';
import ViewCollectionsList from '../../components/viewCollectionsList/view-collections-list';

class ViewCollections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view_collection_list: [{ view_collection_name: 'Air Blue Opal 258', no_of_products: '150 in stonk', no_of_variants: '12 variants' },
        { view_collection_name: 'Amethyst 204', no_of_products: '100 in stock', no_of_variants: '12 variants' }],
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
          <ViewCollectionsList view_collection_list={this.state.view_collection_list} />
        </Content>
        <FooterView />
      </Container>
    );
  }
}

ViewCollections.propTypes = {
  data: PropTypes.string.isRequired,
};

export default ViewCollections;
