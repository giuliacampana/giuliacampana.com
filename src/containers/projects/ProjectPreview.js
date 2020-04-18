// @flow
import React from 'react';
import styled from 'styled-components';

const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 30px;
  position: relative;
`;

const ProjectTitle = styled.div`
  color: #2e2333;
  font-size: 22px;
  font-weight: 600;
`;

const ProjectSubtitle = styled.div`
  color: #817387;
  margin: 10px 0 20px;
  text-transform: uppercase;
`;

const ProjectBlurb = styled.div`
  color: #43314b;
  font-size: 18px;
  margin-bottom: 20px;
`;

const LearnMoreButton = styled.div`
  align-self: flex-start;
  background-color: #7f7882;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  padding: 5px 10px;
`;

type Props = {
  project :Object;
};

const ProjectPreview = ({ project } :Props) => (
  <ProjectCard>
    <ProjectTitle>{ project.title }</ProjectTitle>
    <ProjectSubtitle>{ project.subtitle }</ProjectSubtitle>
    <ProjectBlurb>{ project.blurb }</ProjectBlurb>
    <LearnMoreButton>Learn more</LearnMoreButton>
  </ProjectCard>
);

export default ProjectPreview;
