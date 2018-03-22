import React from 'react';
import {
  Header,
  Left,
  Right,
  Body,
} from 'native-base';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import BasicStyles from './BasicStyles';
import CommonStyles from '../../CommonStyles';

const HeaderView = props => (
  <Header
    style={CommonStyles.header_footer}
  >
    <Left
      style={BasicStyles.flexStyle}
    >
      <TouchableOpacity
        onPress={() => Actions.pop()}
      >
        <Icon
          style={BasicStyles.iconStyle}
          name="angle-left"
          size={30}
        />
      </TouchableOpacity>
    </Left>
    <Body
      style={BasicStyles.title}
    >
      <Text
        style={BasicStyles.HeadingText}
      >
        {props.title}
      </Text>
    </Body>
    <Right
      style={BasicStyles.flexStyle}
    />
  </Header>
);

HeaderView.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderView;
