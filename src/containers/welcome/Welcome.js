import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Text, ScrollView } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import CommonStyles from '../../assets/CommonStyles';
import BasicStyles from './BasicStyles';
import constantsText from '../../constants/constantsText';
import colors from '../../constants/colors';

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
        <ScrollView>
          <View style={CommonStyles.background}>
            <Text
              style={[CommonStyles.HeadingText, BasicStyles.titleMargin, BasicStyles.fontType]}
            >
              {constantsText.shoppin}
            </Text>
            <TextInput
              style={[CommonStyles.inputText, CommonStyles.marginBoth]}
              underlineColorAndroid="transparent"
              placeholder={constantsText.website}
              placeholderTextColor={colors.pureGray}
            />
            <TextInput
              style={[CommonStyles.inputText, BasicStyles.marginBoth]}
              underlineColorAndroid="transparent"
              placeholder={constantsText.email}
              placeholderTextColor={colors.pureGray}
            />
            <TextInput
              style={[CommonStyles.inputText, BasicStyles.marginBoth]}
              underlineColorAndroid="transparent"
              placeholder={constantsText.password}
              placeholderTextColor={colors.pureGray}
            />
            <Button
              full
              dark
              style={BasicStyles.buttomMarginTop}
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
                style={[CommonStyles.forgotPassword, CommonStyles.textColorSkyBlue,
                  BasicStyles.topMargin]}
              >
                {constantsText.forgotPassword}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Welcome;
