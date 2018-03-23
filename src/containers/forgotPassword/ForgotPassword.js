import React, { Component } from 'react';
import { TextInput, Text } from 'react-native';
import { Button, Container } from 'native-base';
import CommonStyles from '../../assets/CommonStyles';
import constantsText from '../../constants/constantsText';
import HeaderView from '../../components/header/header';
import BasicStyles from './BasicStyles';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container style={BasicStyles.background}>
        <HeaderView title={constantsText.forgotPasswordTitle} />
        <TextInput
          style={[CommonStyles.inputText, BasicStyles.inputText]}
          placeholder={constantsText.email}
        />
        <Button full dark style={CommonStyles.buttonStyles}>
          <Text style={[CommonStyles.textStyle, CommonStyles.textColorWhite]}>
            {constantsText.Change_Password}
          </Text>
        </Button>
      </Container>
    );
  }
}

export default ForgotPassword;
