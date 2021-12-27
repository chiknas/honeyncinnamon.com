import React from 'react';
import { useUserService } from 'services/UserService/UserService';
import { ProfileLogin } from './ProfileLogin';
import { ProfileUserSettings } from './ProfileUserSettings';

const ProfileButtonSize = '1.1em';

export const ProfileButton: React.FunctionComponent = () => {
  const { currentUser } = useUserService();
  const profile = currentUser ? (
    <ProfileUserSettings size={ProfileButtonSize} />
  ) : (
    <ProfileLogin size={ProfileButtonSize} />
  );

  return <>{profile}</>;
};
