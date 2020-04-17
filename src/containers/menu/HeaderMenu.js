// @flow
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Menu from './Menu';
import * as Routes from '../../core/router/Routes';

const HeaderMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
`;

const Name = styled(NavLink)`
  color: #fff;
  font-family: 'Gotu', sans-serif;
  font-size: 18px;
  text-decoration: none;
`;

const HeaderMenu = () => (
  <HeaderMenuWrapper>
    <Name to={Routes.ROOT}>Giulia Campana</Name>
    <Menu />
  </HeaderMenuWrapper>
);

export default HeaderMenu;
