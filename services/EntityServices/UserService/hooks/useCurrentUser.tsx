import React from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { User } from '../types';
import { getFirestore, doc, DocumentReference } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { DataLoad } from 'services/EntityServices/types';

export const useCurrentUser = (): DataLoad<User | undefined> => {
  const [user] = useAuthState(getAuth());
  const currentUserReference = React.useMemo(
    () => (user ? doc(getFirestore(), 'users', user.uid) : undefined),
    [user]
  ) as DocumentReference<User> | undefined;
  const [response, loading] = useDocument<User>(currentUserReference);
  const result = React.useMemo(() => {
    return response && { ...response.data(), id: response.id ?? '' };
  }, [response]);

  return { result, loading };
};
