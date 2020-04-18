// @flow
import React from 'react';
import styled from 'styled-components';

import HeaderMenu from '../menu/HeaderMenu';
import ProjectPreview from './ProjectPreview';
import { PROJECTS } from './consts/ProjectConsts';

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

const Projects = () => (
  <OuterWrapper>
    <HeaderMenu />
    <InnerWrapper>
      {
        PROJECTS.map((project :Object) => (
            <ProjectPreview
                key={project.title}
                project={project} />
          ))
      }
    </InnerWrapper>
  </OuterWrapper>
);

export default Projects;
