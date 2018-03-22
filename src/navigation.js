import React from 'react';
import { connect, Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import store from './store';
import Welcome from './containers/welcome/Welcome';
import ForgotPassword from './containers/forgotPassword/ForgotPassword';

const RouterWithRedux = connect()(Router);

const Navigator = () => (
  <Provider store={store}>
    <RouterWithRedux>
      <Scene hideNavBar>
        <Scene
          key="welcome"
          component={Welcome}
          initial
        />
        <Scene
          key="forgotPassword"
          component={ForgotPassword}
        />
      </Scene>
    </RouterWithRedux>
  </Provider>
);

export default Navigator;
