import React from 'react';
import styled from 'styled-components';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';
import { Theme } from 'styles/Theme';

const FooterContainer = styled.div`
  padding: 1em;
  overflow: hidden;
  background-color: ${Theme.palette.background.default};
  bottom: 0;
  display: flex;
  justify-content: center;
  height: 5vh;
  width: 100%;
  * + * {
    margin-left: 1em;
  }
`;

const Footer: React.FunctionComponent = () => {
  return (
    <FooterContainer>
      <BsFacebook color="#3b5998" />
      <BsInstagram color="purple" />
      <BsTwitter color="blue" />
      <BsGithub color="black" />
    </FooterContainer>
  );
};

export default React.memo(Footer);
