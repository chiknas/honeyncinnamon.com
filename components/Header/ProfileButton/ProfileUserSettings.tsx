import { UserProfilePic } from 'components/UserProfilePic/UserProfilePic';
import { withPoperPanel } from 'components/PoperPanel/PoperPanel';
import React from 'react';
import { useUserService } from 'services/UserService/UserService';
import { MenuList, Button } from '@material-ui/core';
import { useTranslation } from 'next-i18next';

type ProfileUserSettingsProps = {
  size: string;
};

export const ProfileUserSettings: React.FunctionComponent<ProfileUserSettingsProps> =
  ({ size }) => {
    const { t } = useTranslation();
    const { signOut } = useUserService();
    const UserProfilePicPoper = withPoperPanel(<UserProfilePic size={size} />);
    return (
      <UserProfilePicPoper>
        <MenuList autoFocusItem={false} id="user-menu-list">
          <Button onClick={signOut}>{t('profile.signout')}</Button>
        </MenuList>
      </UserProfilePicPoper>
    );
  };
