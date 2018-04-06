import React, { Component } from 'react';
import { TouchableOpacity, TextInput, Text, Image } from 'react-native';
import { Button, Container } from 'native-base';
import { Actions } from 'react-native-router-flux';
import CommonStyles from '../../assets/CommonStyles';
import BasicStyles from './BasicStyles';
import constantsText from '../../constants/constantsText';
import colors from '../../constants/colors';
import { HOME_LOGO } from '../../constants/images';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container style={BasicStyles.background}>
        <Text
          style={[CommonStyles.HeadingText, BasicStyles.titleMargin, BasicStyles.fontType,
            BasicStyles.alignSelf]}
        >
          {constantsText.shoppin}
        </Text>
        <TextInput
          style={[CommonStyles.inputText, BasicStyles.alignSelf, CommonStyles.marginBoth]}
          underlineColorAndroid="transparent"
          placeholder={constantsText.website}
          placeholderTextColor={colors.pureGray}
        />
        <TextInput
          style={[CommonStyles.inputText, CommonStyles.marginBoth, BasicStyles.alignSelf]}
          underlineColorAndroid="transparent"
          placeholder={constantsText.email}
          placeholderTextColor={colors.pureGray}
        />
        <TextInput
          style={[CommonStyles.inputText, CommonStyles.marginBoth, BasicStyles.alignSelf]}
          underlineColorAndroid="transparent"
          placeholder={constantsText.password}
          placeholderTextColor={colors.pureGray}
        />
        <Button
          full
          dark
          style={[BasicStyles.buttomMarginTop, BasicStyles.marginHorizontal]}
          onPress={Actions.dashboard}
        >
          <Text
            style={[CommonStyles.textStyle, CommonStyles.textColorWhite]}
          >{constantsText.login}
          </Text>
        </Button>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={Actions.forgotPassword}
        >
          <Text
            style={[CommonStyles.forgotPassword, BasicStyles.marginHorizontal,
              CommonStyles.textColorSkyBlue, BasicStyles.topMargin]}
          >
            {constantsText.forgotPassword}
          </Text>
        </TouchableOpacity>
        <Image style={[BasicStyles.logoStyle, BasicStyles.marginHorizontal]} source={HOME_LOGO} />
        <Text style={[BasicStyles.marginHorizontal, BasicStyles.fontSize,
          BasicStyles.logo_textplace, CommonStyles.fontColor]}
        >
          {constantsText.version}
        </Text>
      </Container>
    );
  }
}

export default Welcome;
