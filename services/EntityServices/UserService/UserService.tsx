import { useCurrentUser } from './hooks/useCurrentUser';
import { UserService } from './types';
import {
  emailLogin,
  userSignOut,
  emailRegister,
} from './functions/Credentials';

export const useUserService = (): UserService => {
  return {
    getCurrentUser: useCurrentUser,
    emailRegister,
    emailLogin,
    signOut: userSignOut,
  };
};
