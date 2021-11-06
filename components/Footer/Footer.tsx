import React from 'react';
import styled from 'styled-components';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 5vh;
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
