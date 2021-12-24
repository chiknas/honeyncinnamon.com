import React from 'react';
import { Button } from '@material-ui/core';
import { GetStaticProps } from 'next';
import { withTranslateProps } from 'services/StaticPropsHelpers';
import { useUserService } from 'services/UserService/UserService';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: await withTranslateProps(context),
  };
};

const Recipes: React.FunctionComponent = () => {
  const { currentUser, emailLogin, signOut } = useUserService();

  return (
    <>
      <h1>{currentUser?.displayName}</h1>
      <h1>{currentUser?.email}</h1>
      <Button
        onClick={() => {
          emailLogin('', '');
        }}
      >
        SIGN IN
      </Button>
      <Button onClick={signOut}>SIGN OUT</Button>
    </>
  );
};

export default Recipes;
