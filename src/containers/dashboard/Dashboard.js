import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { Text, ScrollView } from 'react-native';
// import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import CommonStyles from '../../CommonStyles';
import constantsText from '../../constants/constantsText';
import HeaderView from '../../components/header/header';
import FooterView from '../../components/footer/footer';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   index: 0,
    //   routes: [
    //     { key: 'first', title: 'First' },
    //     { key: 'second', title: 'Second' },
    //   ],
    // };
    this.renderScene = this.renderScene.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }
  // renderScene() {
  //   SceneMap({
  //     first: FirstRoute,
  //     second: SecondRoute,
  //   });
  // }
  // renderHeader = () => <TabBar {...props} />;
  render() {
    return (
      <Container
        style={CommonStyles.background}
      >
        <HeaderView title={constantsText.Dashboard} />
        <ScrollView>
          {/* <TabViewAnimated
            style={{flex: 1}}
            navigationState={this.state}
            renderScene={this.renderScene}
            renderHeader={this._renderHeader}
            onIndexChange={this._handleIndexChange}
            initialLayout={initialLayout}
          /> */}
        </ScrollView>
        <Text>Hello</Text>
        <Content />
        <FooterView />
      </Container>
    );
  }
}

export default DashBoard;
