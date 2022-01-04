import React from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { User } from '../types';
import { DataLoad } from 'services/EntityServices/types';

export const useCurrentUser = (): DataLoad<User | undefined> => {
  const [user, loading] = useAuthState(getAuth());

  const result = React.useMemo(() => {
    return user
      ? {
          id: user?.uid ?? '',
          email: user?.email !== null ? user?.email : undefined,
          displayName:
            user?.displayName !== null ? user?.displayName : undefined,
          photoUrl: user?.photoURL !== null ? user?.photoURL : undefined,
        }
      : undefined;
  }, [user]);

  return { result, loading };
};
