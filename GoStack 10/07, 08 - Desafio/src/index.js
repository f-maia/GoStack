import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import store from './store';
import Routes from './routes';

export default function src() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <Routes />
      </Provider>
    </>
  );
}
