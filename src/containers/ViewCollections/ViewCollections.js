import React, { Component } from 'react';
import { View, TextInput, Dimensions } from 'react-native';
import { Container, Content } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderView from '../../components/header/header';
import constantsText from '../../constants/constantsText';
import FooterView from '../../components/footer/footer';
import CommonStyles from '../../assets/CommonStyles';
import ViewCollectionsList from '../../components/viewCollectionsList/view-collections-list';
import colors from '../../constants/colors';

const { height } = Dimensions.get('window');

class ViewCollections extends Component {
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
          <ViewCollectionsList view_collection_list={this.props.view_collection_list} />
        </Content>
        <FooterView products={this.state.isShow} />
      </Container>
    );
  }
}

ViewCollections.propTypes = {
  data: PropTypes.string.isRequired,
  view_collection_list: PropTypes.instanceOf(Array).isRequired,

};

const mapStateToProps = state => ({
  view_collection_list: state.get('view_collection_list').toJS(),
});


export default connect(mapStateToProps)(ViewCollections);
