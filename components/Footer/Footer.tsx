import React from 'react';
import styled from 'styled-components';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';

const FooterContainer = styled.div`
  margin-top: 1em;
  overflow: hidden;
  bottom: 0;
  display: flex;
  justify-content: center;
  height: 5vh;
  width: 100%;
  * + * {
    margin-left: 1em;
  }
`;

export const Footer: React.FunctionComponent = () => {
  return (
    <FooterContainer>
      <BsFacebook color="#3b5998" />
      <BsInstagram color="purple" />
      <BsTwitter color="blue" />
      <BsGithub color="black" />
    </FooterContainer>
  );
};
