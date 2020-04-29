import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';
import store from './store';
import GlobalStyles from './styles/global';

import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
        <GlobalStyles />
      </Router>
    </Provider>
  );
}

export default App;
