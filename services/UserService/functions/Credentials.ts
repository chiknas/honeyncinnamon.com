import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { User } from '../types';

export const emailLogin = async (
  email?: string,
  password?: string
): Promise<User | undefined> => {
  if (!email || !password) return;

  const user = await (
    await signInWithEmailAndPassword(getAuth(), email, password)
  ).user;
  return user as User;
};

export const userSignOut = () => {
  signOut(getAuth());
};
