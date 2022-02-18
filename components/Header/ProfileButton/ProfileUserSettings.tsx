import { UserProfilePic } from 'components/UserProfilePic/UserProfilePic';
import { withPoperPanel } from 'components/PoperPanel/PoperPanel';
import React, { useMemo } from 'react';
import { useUserService } from 'services/EntityServices/UserService/UserService';
import { MenuList, Button } from '@material-ui/core';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { Theme } from 'styles/Theme';

const StyledMenuList = styled(MenuList)`
  background: ${Theme.palette.background.default};
  display: flex;
  padding: 0px;
  flex-direction: column;
`;

const StyledMenuListButton = styled(Button)`
  border-radius: 0px;
  border-bottom: 1px solid black;
  padding: 1rem;
`;

type ProfileUserSettingsProps = {
  size: string;
};

export const ProfileUserSettings: React.FunctionComponent<ProfileUserSettingsProps> =
  ({ size }) => {
    const { t } = useTranslation();
    const { signOut } = useUserService();
    const UserProfilePicPoper = useMemo(
      () => withPoperPanel(<UserProfilePic size={size} />),
      [size]
    );
    return (
      <UserProfilePicPoper>
        <StyledMenuList autoFocusItem={false} id="user-menu-list">
          <StyledMenuListButton onClick={signOut}>
            {t('profile.signout')}
          </StyledMenuListButton>
        </StyledMenuList>
      </UserProfilePicPoper>
    );
  };
