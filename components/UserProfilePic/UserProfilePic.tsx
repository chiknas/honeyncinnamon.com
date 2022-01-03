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
  src?: string;
  size?: string;
};

export const UserProfilePic: React.FunctionComponent<UserProfilePicProps> = ({
  src,
  size,
}) => {
  return (
    // TODO - check is we are running on phone and change to sizes to 40px
    // TODO - set default src in case something goes wrong and we dont have a user foto
    <ProfileImage size={size ?? '30px;'} src={src ?? ''} />
  );
};
