import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Container, Content } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderView from '../../components/header/header';
import constantsText from '../../constants/constantsText';
import FooterView from '../../components/footer/footer';
import CommonStyles from '../../assets/CommonStyles';
import CollectioList from '../../components/collections/collections-list';
import colors from '../../constants/colors';


class Collections extends Component {
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
        <HeaderView title={this.props.data} />
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
          <CollectioList collectionList={this.props.data === 'All Products' ?
            this.props.all_products : this.props.collection_list}
          />
        </Content>
        <FooterView products={this.state.isShow} />
      </Container>
    );
  }
}

Collections.propTypes = {
  data: PropTypes.string.isRequired,
  collection_list: PropTypes.instanceOf(Array).isRequired,
  all_products: PropTypes.instanceOf(Array).isRequired,
};


const mapStateToProps = state => ({
  collection_list: state.get('collection_list').toJS(),
  all_products: state.get('all_products').toJS(),

});
export default connect(mapStateToProps)(Collections);
