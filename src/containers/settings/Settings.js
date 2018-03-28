import React, { Component } from 'react';
import { Text, View, Switch, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';
import constantsText from '../../constants/constantsText';
import HeaderView from '../../components/header/header';
import CommonStyles from '../../assets/CommonStyles';
import FooterView from '../../components/footer/footer';
import BasicStyles from './BasicStyles';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: 1,
    };
  }

  render() {
    return (
      <Container style={[CommonStyles.backgroundColor, CommonStyles.paddingHorizontal]}>
        <HeaderView title={constantsText.settings} />
        <Content>
          <Text style={[CommonStyles.fontStyle, CommonStyles.marginTop, CommonStyles.fontBold]}>
            {constantsText.app_setings}
          </Text>
          <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween,
            BasicStyles.marginTop, BasicStyles.marginHorizontal]}
          >
            <View>
              <Text style={[BasicStyles.listedText, CommonStyles.fontBold]}>
                {constantsText.pushNotifications}
              </Text>
              <Text style={[CommonStyles.fontStyle, CommonStyles.fontBold]}>
                {constantsText.orders}
              </Text>
            </View>
            <Switch />
          </View>
          <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween,
            BasicStyles.marginHorizontal, BasicStyles.marginTop]}
          >
            <View>
              <Text style={[BasicStyles.listedText, CommonStyles.fontBold]}>
                {constantsText.badgeAppIcon}
              </Text>
              <Text style={[CommonStyles.fontStyle, CommonStyles.fontBold]}>
                {constantsText.orders}
              </Text>
            </View>
            <Switch />
          </View>
          <TouchableOpacity
            onPress={Actions.welcome}
          >
            <Text
              style={[CommonStyles.forgotPassword, CommonStyles.textColorSkyBlue,
                BasicStyles.marginTop]}
            >
              {constantsText.logOut}
            </Text>
          </TouchableOpacity>
        </Content>
        <FooterView settings={this.state.isShow} />
      </Container>
    );
  }
}

export default Settings;
