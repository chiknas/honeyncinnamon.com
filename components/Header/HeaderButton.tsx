import { Box, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

type HeaderButtonProps = {
  route?: string;
};

export const HeaderButton: React.FunctionComponent<
  React.PropsWithChildren<HeaderButtonProps>
> = ({ children, route }) => {
  return (
    <Link href={route ?? '/'}>
      <a>
        <Box sx={{ letterSpacing: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      </a>
    </Link>
  );
};
