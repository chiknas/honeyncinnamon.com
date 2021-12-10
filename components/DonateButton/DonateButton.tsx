import { Button } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { routes } from 'services/routes';
import styled from 'styled-components';

const Donate = styled(Button)`
  color: #003087;
  background-color: #f2ba36;
  font-family: system-ui;
  font-style: italic;
  font-weight: bold;
  text-shadow: 0.1em 0.1em #009cde;
  width: 10em;
  max-width: 150px;
  :hover {
    background-color: #f0ac0f;
  }
`;

export const DonateButton: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Donate onClick={() => router.push(routes.donate)}>{t('donate')}</Donate>
  );
};
