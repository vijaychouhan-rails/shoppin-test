import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Container, Content } from 'native-base';
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
      collectionList: [{ collection_name: 'Swarovki Crystals', no_of_products: '19 Products' },
        { collection_name: 'Tools & Accessories', no_of_products: '16 Products' }],
    };
  }
  render() {
    return (
      <Container
        style={CommonStyles.background}
      >
        <HeaderView title={constantsText.collections} />
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
          <CollectioList collectionList={this.state.collectionList} />
        </Content>
        <FooterView />
      </Container>
    );
  }
}

export default Collections;
