import React from 'react';
import {
  Footer,
  FooterTab,
  Button,
  Text,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonStyles from '../../assets/CommonStyles';
import constantsText from '../../constants/constantsText';
import BasicStyles from './BasicStyles';

const FooterView = () => (
  <Footer
    style={CommonStyles.header_footer}
  >
    <FooterTab
      style={BasicStyles.footerTab}
    >
      <Button vertical>
        <Icon name="star" size={20} style={BasicStyles.icon} />
        <Text
          style={BasicStyles.footerText}
        >
          {constantsText.home}
        </Text>
      </Button>
      <Button vertical onPress={Actions.orders}>
        <Icon name="circle" size={20} style={BasicStyles.icon} />
        <Text
          style={BasicStyles.footerText}
        >
          {constantsText.orders}
        </Text>
      </Button>
      <Button vertical onPress={Actions.products}>
        <Icon name="square" size={20} style={BasicStyles.icon} />
        <Text
          style={BasicStyles.footerText}
        >
          {constantsText.products}
        </Text>
      </Button>
      <Button vertical onPress={Actions.collections}>
        <Icon name="triangle" size={20} style={BasicStyles.icon} />
        <Text
          style={BasicStyles.footerText}
        >
          {constantsText.settings}
        </Text>
      </Button>
    </FooterTab>
  </Footer>
);


export default FooterView;
