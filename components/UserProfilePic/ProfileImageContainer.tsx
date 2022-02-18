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

export const ProfileImageContainer: React.FunctionComponent<
  React.ComponentProps<typeof ProfileImage>
> = ({ ...props }) => {
  return <ProfileImage {...props} />;
};
