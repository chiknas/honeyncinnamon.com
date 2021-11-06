import { Button } from '@material-ui/core';
import React from 'react';
import { useRouter } from 'next/dist/client/router';

type HeaderButtonProps = {
  route?: string;
};

export const HeaderButton: React.FunctionComponent<
  React.PropsWithChildren<HeaderButtonProps>
> = ({ children, route }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(route ?? '');
  };

  return <Button onClick={onClick}>{children}</Button>;
};
