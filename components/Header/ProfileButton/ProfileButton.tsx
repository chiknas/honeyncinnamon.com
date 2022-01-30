import React from 'react';
import { useUserService } from 'services/EntityServices/UserService/UserService';
import styled from 'styled-components';
import { ProfileLogin } from './ProfileLogin';
import { ProfileUserSettings } from './ProfileUserSettings';

const ProfileButtonSize = '22px';

const ProfileButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileButton: React.FunctionComponent = () => {
  const { getCurrentUser } = useUserService();
  const { result: currentUser } = getCurrentUser();
  const profile = currentUser ? (
    <ProfileUserSettings size={ProfileButtonSize} />
  ) : (
    <ProfileLogin size={ProfileButtonSize} />
  );

  return <ProfileButtonContainer>{profile}</ProfileButtonContainer>;
};

export default ProfileButton;
