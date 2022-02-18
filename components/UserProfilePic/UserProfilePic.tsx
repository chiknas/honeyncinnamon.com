import React from 'react';
import { useCurrentUser } from 'services/EntityServices/UserService/hooks/useCurrentUser';
import { ProfileImageContainer } from './ProfileImageContainer';

type UserProfilePicProps = {
  size?: string;
};

export const UserProfilePic: React.FunctionComponent<UserProfilePicProps> = ({
  size,
}) => {
  const { result: user } = useCurrentUser();
  return (
    <ProfileImageContainer
      size={size ?? '30px;'}
      src={`https://avatars.dicebear.com/api/adventurer/${
        user?.displayName ?? 'default'
      }.svg?scale=150`}
    />
  );
};
