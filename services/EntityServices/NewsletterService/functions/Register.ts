import { doc, getFirestore, setDoc } from 'firebase/firestore';

export const register = async (email: string): Promise<void> => {
  return setDoc(
    doc(getFirestore(), 'emailList', email),
    {}
  ) as unknown as Promise<void>;
};
