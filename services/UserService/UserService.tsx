import { useCurrentUser } from './hooks/useCurrentUser';
import { UserService } from './types';
import { emailLogin, userSignOut } from './functions/Credentials';

export const useUserService = (): UserService => {
  const user = useCurrentUser();
  return { currentUser: user, emailLogin, signOut: userSignOut };
};
