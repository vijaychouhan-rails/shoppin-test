import React, { Component } from 'react';
import { Container } from 'native-base';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import constantsText from '../../constants/constantsText';
import HeaderView from '../../components/header/header';
import FooterView from '../../components/footer/footer';
import BasicStyles from './BasicStyles';
import Today from '../../components/dashboard/today';
import Yesterday from '../../components/dashboard/yesterday';
import ThisWeek from '../../components/dashboard/thisWeek';
import colors from '../../constants/colors';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
    };
  }

  render() {
    return (
      <Container
        style={BasicStyles.container}
      >
        <HeaderView title={constantsText.Dashboard} />
        <ScrollableTabView
          initialPage={0}
          tabBarBackgroundColor={colors.white}
          tabBarActiveTextColor={colors.bluecolor}
          tabBarUnderlineStyle={BasicStyles.underLineColor}
        >
          <Today tabLabel={constantsText.today} />
          <Yesterday tabLabel={constantsText.yesterday} />
          <ThisWeek tabLabel={constantsText.this_week} />
        </ScrollableTabView>;
        <FooterView dashboard={this.state.id} />
      </Container>
    );
  }
}

export default DashBoard;
