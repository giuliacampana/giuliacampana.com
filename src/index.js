// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router';
import { createGlobalStyle } from 'styled-components';

import AppContainer from './containers/app/AppContainer';
import initializeRouterHistory from './core/router/RouterHistory';
import * as serviceWorker from './serviceWorker';
import * as Routes from './core/router/Routes';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #ffffff;
    font-family: 'Karla', sans-serif;
    height: 100%;
    line-height: normal;
    margin: 0;
    width: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  * {
    box-sizing: border-box;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  #root {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

const routerHistory = initializeRouterHistory();

const APP_ROOT_NODE = document.getElementById('root');
if (APP_ROOT_NODE) {
  ReactDOM.render(
    <Router history={routerHistory}>
      <Route path={Routes.ROOT} component={AppContainer} />
      <GlobalStyle />
    </Router>,
    APP_ROOT_NODE
  );
}

serviceWorker.unregister();
