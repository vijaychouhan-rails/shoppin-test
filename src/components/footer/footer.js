import React from 'react';
import {
  Footer,
  FooterTab,
  Button,
  Text,
  Icon,
} from 'native-base';
import CommonStyles from '../../CommonStyles';
// import { Actions } from 'react-native-router-flux';
// import Icon from 'react-native-vector-icons/';
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
        <Icon name="star" size={20} />
        <Text
          style={BasicStyles.footerText}
        >
          {constantsText.home}
        </Text>
      </Button>
      <Button vertical>
        <Icon name="circle" size={20} />
        <Text
          style={BasicStyles.footerText}
        >
          {constantsText.orders}
        </Text>
      </Button>
      <Button vertical>
        <Icon name="square" size={20} />
        <Text
          style={BasicStyles.footerText}
        >
          {constantsText.products}
        </Text>
      </Button>
      <Button vertical>
        <Icon name="triangle" size={20} />
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
