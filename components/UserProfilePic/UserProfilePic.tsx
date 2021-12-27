import React from 'react';
import styled from 'styled-components';

const ProfileImage = styled.img<{ size: string }>`
  display: block;
  object-fit: cover;
  border-radius: 100%;

  max-width: ${(props) => props.size};
  max-height: ${(props) => props.size};
  min-width: ${(props) => props.size};
  min-height: ${(props) => props.size};
`;

type UserProfilePicProps = {
  size?: string;
};

export const UserProfilePic: React.FunctionComponent<UserProfilePicProps> = ({
  size,
}) => {
  return (
    // TODO - check is we are running on phone and change to sizes to 40px
    <ProfileImage
      size={size ?? '80px;'}
      src="https://i0.wp.com/escxtra.com/wp-content/uploads/elena-paparizou.jpg?w=700"
    />
  );
};
