import {
  Button,
  Popper,
  MenuList,
  MenuItem,
  Typography,
  ClickAwayListener,
} from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import Link from 'next/link';
import React from 'react';
import { Theme } from 'styles/Theme';

type LanguageItemProps = {
  language: string;
  onClick: () => void;
};

const LanguageItem: React.FunctionComponent<LanguageItemProps> = ({
  language,
  onClick,
}) => {
  const { pathname, query } = useRouter();

  const StyledMenuItem = styled(MenuItem)`
    background-color: ${Theme.palette.background.default};
    &:hover {
      background-color: ${Theme.palette.background.paper};
    }
  `;

  return (
    <StyledMenuItem onClick={onClick} key={language}>
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

export const LanguageButton: React.FunctionComponent = () => {
  const { locale } = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledLanguageButton
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Typography>{locale}</Typography>
      </StyledLanguageButton>
      <Popper id="basic-menu" anchorEl={anchorEl} open={open} transition>
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList autoFocusItem={false} id="menu-list">
            <LanguageItem onClick={handleClose} language="en" />
            <LanguageItem onClick={handleClose} language="gr" />
          </MenuList>
        </ClickAwayListener>
      </Popper>
    </>
  );
};
