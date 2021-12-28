import { LoginForm } from 'components/LoginForm/LoginForm';
import { withPoperPanel } from 'components/PoperPanel/PoperPanel';
import React, { useMemo } from 'react';
import { CgProfile } from 'react-icons/cg';
import styled from 'styled-components';

const ProfileIcon = styled(CgProfile)<{ size: string }>`
  font-size: ${(props) => props.size};
`;

type ProfileLoginProps = {
  size: string;
};

export const ProfileLogin: React.FunctionComponent<ProfileLoginProps> = ({
  size,
}) => {
  const ProfileIconPoper = useMemo(
    () => withPoperPanel(<ProfileIcon size={size} />),
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
