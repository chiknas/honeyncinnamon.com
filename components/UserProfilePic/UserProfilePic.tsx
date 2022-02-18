import React, { useState, useMemo } from 'react';
import { useCurrentUser } from 'services/EntityServices/UserService/hooks/useCurrentUser';
import { ProfileImageContainer } from './ProfileImageContainer';

type UserProfilePicProps = {
  size?: string;
};

export const UserProfilePic: React.FunctionComponent<UserProfilePicProps> = ({
  size,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const { result: user } = useCurrentUser();
  const imageSize = useMemo(() => size ?? '30px', [size]);
  return (
    <ProfileImageContainer
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      size={imageSize}
      src={`https://avatars.dicebear.com/api/adventurer/${
        user?.displayName ?? 'default'
      }.svg?scale=140${isFocused ? '&hairColor=red02' : ''}`}
    />
  );
};
