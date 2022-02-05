import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';

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

export const emailRegister = async (
  displayName: string,
  email: string,
  password: string
): Promise<void> => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(getAuth(), email, password).then(
    async (userCredential) => {
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: displayName,
        photoURL:
          'https://wiwibloggs.com/wp-content/uploads/2020/09/Helena-Paparizou-Greece-Eurovision-2005.jpg',
      });
    }
  );
};
