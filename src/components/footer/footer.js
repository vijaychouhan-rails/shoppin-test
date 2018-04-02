import React from 'react';
import {
  Footer,
  FooterTab,
  Button,
  Text,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonStyles from '../../assets/CommonStyles';
import constantsText from '../../constants/constantsText';
import BasicStyles from './BasicStyles';

const FooterView = props => (
  <Footer
    style={CommonStyles.header_footer}
  >
    <FooterTab
      style={BasicStyles.footerTab}
    >
      <Button vertical onPress={Actions.dashboard}>
        <Icon name="star" size={25} style={props.dashboard ? BasicStyles.iconBlue : BasicStyles.icon} />
        <Text
          style={props.dashboard ? [BasicStyles.footerText, BasicStyles.marginTop,
            BasicStyles.backgroundColor] : [BasicStyles.footerText, BasicStyles.marginTop]}
        >
          {constantsText.home}
        </Text>
      </Button>
      <Button vertical onPress={Actions.orders}>
        <Icon name="circle" size={25} style={props.orders ? BasicStyles.iconBlue : BasicStyles.icon} />
        <Text
          style={props.orders ? [BasicStyles.footerText, BasicStyles.marginTop,
            BasicStyles.backgroundColor] : [BasicStyles.footerText, BasicStyles.marginTop]}
        >
          {constantsText.orders}
        </Text>
      </Button>
      <Button vertical onPress={Actions.products}>
        <Icon name="square" size={25} style={props.products ? BasicStyles.iconBlue : BasicStyles.icon} />
        <Text
          style={props.products ? [BasicStyles.footerText, BasicStyles.marginTop,
            BasicStyles.backgroundColor] : [BasicStyles.footerText, BasicStyles.marginTop]}
        >
          {constantsText.products}
        </Text>
      </Button>
      <Button vertical onPress={Actions.settings}>
        <Icon name="exclamation-triangle" size={25} style={props.settings ? BasicStyles.iconBlue : BasicStyles.icon} />
        <Text
          style={props.settings ? [BasicStyles.footerText, BasicStyles.marginTop,
            BasicStyles.backgroundColor] : [BasicStyles.footerText, BasicStyles.marginTop]}
        >
          {constantsText.settings}
        </Text>
      </Button>
    </FooterTab>
  </Footer>
);

FooterView.propTypes = {
  settings: PropTypes.number,
  dashboard: PropTypes.number,
  orders: PropTypes.number,
  products: PropTypes.number,
};

FooterView.defaultProps = {
  settings: 0,
  dashboard: 0,
  orders: 0,
  products: 0,
};

export default FooterView;
