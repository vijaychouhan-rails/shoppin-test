import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import CommonStyles from '../../assets/CommonStyles';
import constantsText from '../../constants/constantsText';
import BasicStyles from './BasicStyles';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
        style={CommonStyles.background}
      >
        <Text
          style={CommonStyles.HeadingText}
        >
          {constantsText.shoppin}
        </Text>
        <TextInput
          style={[CommonStyles.inputText, CommonStyles.marginBoth]}
          underlineColorAndroid="transparent"
          placeholder={constantsText.website}
        />
        <TextInput
          style={[CommonStyles.inputText, CommonStyles.marginBoth]}
          underlineColorAndroid="transparent"
          placeholder={constantsText.email}
        />
        <TextInput
          style={[CommonStyles.inputText, CommonStyles.marginBoth]}
          underlineColorAndroid="transparent"
          placeholder={constantsText.password}
        />
        <Button
          full
          dark
          style={CommonStyles.buttonStyles}
          onPress={Actions.dashboard}
        >
          <Text
            style={[CommonStyles.textStyle, CommonStyles.textColorWhite]}
          >{constantsText.login}
          </Text>
        </Button>
        <TouchableOpacity
          onPress={Actions.forgotPassword}
        >
          <Text
            style={[BasicStyles.forgotPassword, CommonStyles.textColorSkyBlue]}
          >
            {constantsText.forgotPassword}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Welcome;
