import { LoginForm } from 'components/LoginForm/LoginForm';
import { withPoperPanel } from 'components/PoperPanel/PoperPanel';
import { ProfileImageContainer } from 'components/UserProfilePic/ProfileImageContainer';
import React, { useMemo } from 'react';

type ProfileLoginProps = {
  size: string;
};

export const ProfileLogin: React.FunctionComponent<ProfileLoginProps> = ({
  size,
}) => {
  const ProfileIconPoper = useMemo(
    () =>
      withPoperPanel(
        <ProfileImageContainer src="/login-icon.svg" size={size} />
      ),
    [size]
  );

  return (
    <>
      <ProfileIconPoper>
        <LoginForm />
      </ProfileIconPoper>
    </>
  );
};
