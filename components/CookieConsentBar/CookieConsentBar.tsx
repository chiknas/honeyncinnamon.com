import { Typography } from '@material-ui/core';
import { Button } from 'components/generic/Button/Button';
import { useCookieConsent } from '@use-cookie-consent/core';
import { useTranslation } from 'next-i18next';
import React, { useCallback } from 'react';
import CookieConsent from 'react-cookie-consent';
import { Theme } from 'styles/Theme';

// Returns an object with all the different types of cookies we can have and if we consent or not.
const cookiesConsent = (consent: boolean) => ({
  session: consent,
  persistent: consent,
  necessary: consent,
  preferences: consent,
  statistics: consent,
  marketing: consent,
  firstParty: consent,
  thirdParty: consent,
});

const CookieConsentBar: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const { acceptCookies, cookies } = useCookieConsent({
    defaultConsent: cookiesConsent(false),
  });

  const onCookieConsent = useCallback(
    () => acceptCookies(cookiesConsent(true)),
    [acceptCookies]
  );

  const onCookieDecline = useCallback(() => {
    acceptCookies(cookiesConsent(false));
    // drop all currently stored cookies
    Object.entries(cookies.getAll()).forEach((cookie) =>
      cookies.remove(cookie[0])
    );
  }, [acceptCookies, cookies]);

  return (
    <CookieConsent
      enableDeclineButton
      ButtonComponent={Button}
      flipButtons={true}
      disableButtonStyles={true}
      buttonText={t('cookie-consent.accept-button')}
      declineButtonText={t('cookie-consent.decline-button')}
      buttonStyle={{
        margin: '1em',
        background: Theme.palette.primary.main,
      }}
      declineButtonStyle={{
        margin: '1em',
        background: Theme.palette.error.light,
      }}
      onAccept={onCookieConsent}
      onDecline={onCookieDecline}
    >
      <Typography>{t('cookie-consent.message')}</Typography>
    </CookieConsent>
  );
};

export default React.memo<React.FunctionComponent>(CookieConsentBar);
