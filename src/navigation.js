import React from 'react';
import { connect, Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import store from './store';
import Welcome from './containers/welcome/Welcome';
import ForgotPassword from './containers/forgotPassword/ForgotPassword';
import Dashboard from './containers/dashboard/Dashboard';
import Orders from './containers/orders/Orders';
import Products from './containers/products/Products';
import Collections from './containers/collections/Collections';
import ViewCollections from './containers/ViewCollections/ViewCollections';

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
        <Scene
          key="dashboard"
          component={Dashboard}
        />
        <Scene
          key="orders"
          component={Orders}
        />
        <Scene
          key="products"
          component={Products}
        />
        <Scene
          key="collections"
          component={Collections}
        />
        <Scene
          key="viewCollections"
          component={ViewCollections}
        />
      </Scene>
    </RouterWithRedux>
  </Provider>
);

export default Navigator;
