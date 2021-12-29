export interface User {
  displayName: string;
  email: string;
}

export interface UserService {
  currentUser: User | undefined;
  emailLogin: (email: string, password: string) => Promise<User | undefined>;
  signOut: () => void;
}
