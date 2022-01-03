import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const emailLogin = async (
  email?: string,
  password?: string
): Promise<void> => {
  if (!email || !password) return;

  await (
    await signInWithEmailAndPassword(getAuth(), email, password)
  ).user;
};

export const userSignOut = () => {
  signOut(getAuth());
};
