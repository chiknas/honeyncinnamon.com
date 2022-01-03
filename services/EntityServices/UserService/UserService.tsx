import { useCurrentUser } from './hooks/useCurrentUser';
import { UserService } from './types';
import { emailLogin, userSignOut } from './functions/Credentials';

export const useUserService = (): UserService => {
  return { getCurrentUser: useCurrentUser, emailLogin, signOut: userSignOut };
};
