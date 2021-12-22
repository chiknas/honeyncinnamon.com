import React from 'react';
import styled from 'styled-components';

// TODO - check is we are running on phone and change to sizes to 40px
const ProfileImage = styled.img`
  display: block;
  object-fit: cover;
  border-radius: 100%;

  max-width: 80px;
  max-height: 80px;
  min-width: 80px;
  min-height: 80px;
`;

export const UserProfilePic: React.FunctionComponent = () => {
  return (
    <ProfileImage src="https://i0.wp.com/escxtra.com/wp-content/uploads/elena-paparizou.jpg?w=700" />
  );
};
