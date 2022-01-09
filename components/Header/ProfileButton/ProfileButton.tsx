import React from 'react';
import { useUserService } from 'services/EntityServices/UserService/UserService';
import { ProfileLogin } from './ProfileLogin';
import { ProfileUserSettings } from './ProfileUserSettings';

const ProfileButtonSize = '1.1em';

const ProfileButton: React.FunctionComponent = () => {
  const { getCurrentUser } = useUserService();
  const { result: currentUser } = getCurrentUser();
  const profile = currentUser ? (
    <ProfileUserSettings size={ProfileButtonSize} />
  ) : (
    <ProfileLogin size={ProfileButtonSize} />
  );

  return <>{profile}</>;
};

export default ProfileButton;
