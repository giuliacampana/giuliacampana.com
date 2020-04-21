// @flow
import React from 'react';
import styled from 'styled-components';

import HeaderMenu from '../menu/HeaderMenu';
import ProjectPreview from '../projects/ProjectPreview';
import { ARTS_CATEGORIES } from './consts/ArtConsts';

const OuterWrapper = styled.div`
  background-color: #a484b3;
  display: flex;
  flex-direction: column;
`;

const InnerWrapper = styled.div`
  background-color: #a484b3;
  flex-direction: column;
  margin: 20px 50px;
`;

const Arts = () => (
  <OuterWrapper>
    <HeaderMenu />
    <InnerWrapper>
      {
        ARTS_CATEGORIES.map((art :Object) => (
            <ProjectPreview
                key={art.title}
                project={art} />
          ))
      }
    </InnerWrapper>
  </OuterWrapper>
);

export default Arts;
