// @flow
import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import Menu from '../menu/Menu';

const centeredStyles = css`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const OuterWrapper = styled.div`
  ${centeredStyles}
  height: 100%;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Backdrop = styled.div`
  ${centeredStyles}
  height: 100%;
  justify-content: space-between;
  position: relative;
  padding-top: 250px;
  width: 100%;
`;

const nameFadeIn = keyframes `{
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`;

const Name = styled.div`
  color: #875f9a;
  font-family: 'Gotu', sans-serif;
  font-size: 56px;
  font-weight: 500;
  letter-spacing: 4px;
  margin-bottom: 80px;
  animation: ${nameFadeIn} 1.2s ease;
`;

const fadeIn = keyframes `{
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`;

const slideIn = keyframes `{
  0% {
   top: -300px;
 }
 100% {
   top: 0;
 }
}`;

const Curtain = styled.div`
  ${centeredStyles}
  background-color: #875f9a;
  color: white;
  height: 100%;
  justify-content: space-between;
  position: relative;
  padding-top: 250px;
  width: 100%;
  animation: ${fadeIn} 1.5s ease, ${slideIn} 1.2s ease;
`;

const NameAndTitleWrapper = styled.div`
  ${centeredStyles}
`;

const CurtainName = styled(Name)`
  color: #fff;
  margin-bottom: 20px;
`;

const Title = styled.div`
  color: #fff;
  font-size: 22px;
  letter-spacing: 2px;
`;

const IntroPage = () => {
  const [curtainDropped, dropCurtain] = useState(false);
  useEffect(() => {
    setTimeout(() => dropCurtain(true), 1000);
  });
  return (
    <OuterWrapper>
      {
        curtainDropped
          ? (
            <Curtain>
              <NameAndTitleWrapper>
                <CurtainName>Giulia Campana</CurtainName>
                <Title>Developer and Artist</Title>
              </NameAndTitleWrapper>
              <Menu bottomMargin />
            </Curtain>
          )
          : (
            <Backdrop>
              <Name>Giulia Campana</Name>
            </Backdrop>
          )
      }
    </OuterWrapper>
  );
};

export default IntroPage;
