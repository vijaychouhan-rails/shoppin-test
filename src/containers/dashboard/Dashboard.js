import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import CommonStyles from '../../assets/CommonStyles';
import constantsText from '../../constants/constantsText';
import HeaderView from '../../components/header/header';
import FooterView from '../../components/footer/footer';
import BasicStyles  from './BasicStyles';
import Today from '../../components/dashboard/today';
import Yesterday from '../../components/dashboard/yesterday'
import ThisWeek from '../../components/dashboard/thisWeek'

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      index: 0,
      routes: [
        { key: 'first', title: 'Today' },
        { key: 'second', title: 'Yesterday' },
        { key: 'third', title: 'This Week' },
      ],
    };
    this.renderHeader = this.renderHeader.bind(this);
    this.handleIndexChange = this.handleIndexChange.bind(this);
  }

  renderScene = SceneMap({
      first: Today,
      second: Yesterday,
      third: ThisWeek,
    });

  handleIndexChange = index => this.setState({ index });

  renderHeader = props => <TabBar
                            tabStyle={BasicStyles.tabStyle}
                            style={BasicStyles.tab}
                            indicatorStyle={BasicStyles.indicator}
                            labelStyle={BasicStyles.labelStyle}
                            {...props}
                          />;

  render() {
    return (
      <Container
        style={BasicStyles.container}
      >
        <HeaderView title={constantsText.Dashboard} />
        <TabViewAnimated
          style={BasicStyles.tabView}
          navigationState={this.state}
          renderScene={this.renderScene}
          renderHeader={this.renderHeader}
          onIndexChange={this.handleIndexChange}
          initialLayout={initialLayout}
        />
      <FooterView dashboard={this.state.id}/>
      </Container>
    );
  }
}

export default DashBoard;
