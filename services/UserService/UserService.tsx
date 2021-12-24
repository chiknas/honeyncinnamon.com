import { useCurrentUser } from './hooks/useCurrentUser';
import { User } from './types';
import { emailLogin, userSignOut } from './functions/Credentials';

interface UserService {
  currentUser: User | undefined;
  emailLogin: (email: string, password: string) => Promise<User | undefined>;
  signOut: () => void;
}

export const useUserService = (): UserService => {
  const user = useCurrentUser();
  return { currentUser: user, emailLogin, signOut: userSignOut };
};
