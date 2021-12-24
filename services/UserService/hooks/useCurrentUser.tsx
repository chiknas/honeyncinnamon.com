import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { User } from '../types';

export const useCurrentUser = (): User | undefined => {
  const [user] = useAuthState(getAuth());

  return user as User;
};
