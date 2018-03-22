import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import CommonStyles from '../../CommonStyles';
import constantsText from '../../constants/constantsText';
import BasicStyles from './BasicStyles';

class Welcome extends Component{
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
          placeholder={constantsText.website}
        />
        <TextInput
          style={CommonStyles.inputText}
          placeholder={constantsText.email}
        />
        <TextInput
          style={CommonStyles.inputText}
          placeholder={constantsText.password}
        />
        <Button
          full dark
          style={CommonStyles.buttonStyles}
        >
          <Text
            style={[CommonStyles.textStyle, CommonStyles.textColorWhite]}
          >{constantsText.login}</Text>
        </Button>
        <TouchableOpacity
          onPress={Actions.forgotPassword}
        >
          <Text
            style={[BasicStyles.forgotpassword,CommonStyles.textColorSkyBlue]}
          >
            {constantsText.forgotPassword}
          </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default Welcome;
