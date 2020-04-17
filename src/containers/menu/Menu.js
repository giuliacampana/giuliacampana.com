// @flow
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import * as Routes from '../../core/router/Routes';

const activeMenuStyle = {
  borderBottom: '1px solid #fff',
};

const MenuWrapper = styled.div`
  display: flex;
  font-size: 16px;
  margin-bottom: ${props => props.bottomMargin ? '150px' : '0'};
`;

const MenuItem = styled(NavLink)`
  color: #fff;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 2px;
  text-decoration: none;
`;

const Slash = styled.span`
  color: #fff;
  margin-right: 10px;
  margin-top: 2px;
`;

type Props = {
  bottomMargin ?:boolean;
};

const Menu = ({ bottomMargin } :Props) => (
  <MenuWrapper bottomMargin={bottomMargin}>
    <MenuItem activeStyle={activeMenuStyle} to={Routes.PROJECTS}>Projects</MenuItem>
    <Slash>/</Slash>
    <MenuItem activeStyle={activeMenuStyle} to={Routes.ARTS}>Arts</MenuItem>
    <Slash>/</Slash>
    <MenuItem activeStyle={activeMenuStyle} to={Routes.ABOUT}>About</MenuItem>
  </MenuWrapper>
);

export default Menu;
