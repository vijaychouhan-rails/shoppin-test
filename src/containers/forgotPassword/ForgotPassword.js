import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import { Button } from 'native-base';
import CommonStyles from '../../CommonStyles';
import constantsText from '../../constants/constantsText';

class ForgotPassword extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <View
        style={CommonStyles.background}
      >
        
        <TextInput
          style={CommonStyles.inputText}
          placeholder={constantsText.email}
        />
        <Button
          full dark
          style={CommonStyles.buttonStyles}
        >
          <Text
            style={[CommonStyles.textStyle, CommonStyles.textColorWhite]}
          >{constantsText.login}</Text>
        </Button>

      </View>
    );
  }
}

export default ForgotPassword;
