import React from 'react';
import {
  Header,
  Left,
  Right,
  Body,
} from 'native-base';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import BasicStyles from './BasicStyles';
import CommonStyles from '../../assets/CommonStyles';

const { height } = Dimensions.get('window');

const HeaderView = props => (
  <Header
    style={CommonStyles.header_footer}
  >
    <Left
      style={BasicStyles.flexStyle}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => Actions.pop()}
      >
        <Icon
          style={BasicStyles.iconStyle}
          name="angle-left"
          size={height / 25}
        />
      </TouchableOpacity>
    </Left>
    <Body>
      <Text
        style={[BasicStyles.HeadingText, BasicStyles.title]}
      >
        {props.title}
      </Text>
    </Body>
    <Right
      style={BasicStyles.flexStyle}
    >
      {props.showBar &&
      <TouchableOpacity
        activeOpacity={1}
        // onPress={() => Actions.pop()}
      >
        <Icon
          style={BasicStyles.iconStyle}
          name="bars"
          size={height / 30}
        />
      </TouchableOpacity>}
    </Right>

  </Header>
);

HeaderView.propTypes = {
  title: PropTypes.string.isRequired,
  showBar: PropTypes.bool,
};

HeaderView.defaultProps = {
  showBar: null,
};


export default HeaderView;
