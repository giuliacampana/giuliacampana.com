// @flow
import React from 'react';
import { Route, Switch } from 'react-router';

import IntroPage from '../intro/IntroPage';
import Projects from '../projects/Projects';
import * as Routes from '../../core/router/Routes';

const AppContainer = () => {
  return (
    <Switch>
      <Route path={Routes.PROJECTS} component={Projects} />
      <Route path={Routes.ROOT} component={IntroPage} />
    </Switch>
  );
}

export default AppContainer;
