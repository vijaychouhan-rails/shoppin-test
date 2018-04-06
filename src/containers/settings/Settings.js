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
      isOnPushNotification: false,
      isOnBadgeAppIcon: false,
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
          <TouchableOpacity
            activeOpacity={1}
            style={[CommonStyles.directionRow, CommonStyles.spaceBetween, CommonStyles.border,
              BasicStyles.paddingVertical, BasicStyles.marginTop, BasicStyles.marginHorizontal]}
            onPress={() =>
              this.setState({ isOnPushNotification: !this.state.isOnPushNotification })}
          >
            <View>
              <Text style={[BasicStyles.listedText, CommonStyles.fontBold]}>
                {constantsText.pushNotifications}
              </Text>
              <Text style={[CommonStyles.fontStyle, CommonStyles.fontBold]}>
                {constantsText.orders}
              </Text>
            </View>
            <Switch
              onValueChange={() =>
                this.setState({ isOnPushNotification: !this.state.isOnPushNotification })}
              value={this.state.isOnPushNotification}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={[CommonStyles.directionRow, CommonStyles.spaceBetween, CommonStyles.border,
              BasicStyles.paddingVertical, BasicStyles.marginHorizontal, BasicStyles.marginTop]}
            onPress={() =>
              this.setState({ isOnBadgeAppIcon: !this.state.isOnBadgeAppIcon })}
          >
            <View>
              <Text style={[BasicStyles.listedText, CommonStyles.fontBold]}>
                {constantsText.badgeAppIcon}
              </Text>
              <Text style={[CommonStyles.fontStyle, CommonStyles.fontBold]}>
                {constantsText.orders}
              </Text>
            </View>
            <Switch
              onValueChange={() =>
                this.setState({ isOnBadgeAppIcon: !this.state.isOnBadgeAppIcon })}
              value={this.state.isOnBadgeAppIcon}
            />
          </TouchableOpacity>
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
