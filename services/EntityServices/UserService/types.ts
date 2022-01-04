import { DataLoad } from '../types';

export interface User {
  id: string;
  photoUrl?: string;
  displayName?: string | null;
  email?: string;
}

export interface UserService {
  getCurrentUser: () => DataLoad<User | undefined>;
  emailLogin: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}
