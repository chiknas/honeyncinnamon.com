import { Button, Menu, MenuItem } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';

type LanguageItemProps = {
  language: string;
  onClick: () => void;
};

const LanguageItem: React.FunctionComponent<LanguageItemProps> = ({
  language,
  onClick,
}) => {
  const { pathname, query } = useRouter();

  return (
    <MenuItem onClick={onClick} key={language}>
      <Link
        href={{
          pathname,
          query,
        }}
        locale={language}
        scroll={false}
        replace
      >
        {language.toUpperCase()}
      </Link>
    </MenuItem>
  );
};

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
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {locale}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <LanguageItem onClick={handleClose} language="en" />
        <LanguageItem onClick={handleClose} language="gr" />
      </Menu>
    </>
  );
};
