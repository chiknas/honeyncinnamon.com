import { DataLoad } from '../types';

export interface User {
  id: string;
  firstName?: string;
  lastName?: string;
  photoUrl?: string;
  displayName?: string;
  email?: string;
}

export interface UserService {
  getCurrentUser: () => DataLoad<User | undefined>;
  emailLogin: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}
