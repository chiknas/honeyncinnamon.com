import { Button, MenuList, MenuItem, Typography } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import Link from 'next/link';
import React from 'react';
import { Theme } from 'styles/Theme';
import { withPoperPanel } from 'components/PoperPanel/PoperPanel';

type LanguageItemProps = {
  language: string;
};

const StyledMenuItem = styled(MenuItem)`
  background-color: ${Theme.palette.background.default};
  border-bottom: 1px solid black;
  &:hover {
    background-color: ${Theme.palette.background.paper};
  }
`;

const LanguageItem: React.FunctionComponent<LanguageItemProps> = ({
  language,
}) => {
  const { pathname, query } = useRouter();

  return (
    <StyledMenuItem key={language}>
      <Link
        href={{
          pathname,
          query,
        }}
        locale={language}
        scroll={false}
        passHref={true}
        replace
      >
        <Typography>{language.toUpperCase()}</Typography>
      </Link>
    </StyledMenuItem>
  );
};

const StyledLanguageButton = styled(Button)`
  padding: 0;
  &:hover {
    background: none;
  }
`;

const LanguageButton: React.FunctionComponent = () => {
  const { locale } = useRouter();

  const LanguagePoperPanel = React.useMemo(
    () =>
      withPoperPanel(
        <StyledLanguageButton
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          disableRipple
        >
          <Typography>{locale}</Typography>
        </StyledLanguageButton>
      ),
    [locale]
  );

  return (
    <LanguagePoperPanel>
      <MenuList autoFocusItem={false} id="menu-list">
        <LanguageItem language="en" />
        <LanguageItem language="gr" />
      </MenuList>
    </LanguagePoperPanel>
  );
};

export default LanguageButton;
