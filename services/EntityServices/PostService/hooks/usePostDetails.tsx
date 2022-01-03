import { doc, getFirestore, DocumentReference } from 'firebase/firestore';
import React from 'react';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import { DataLoad } from 'services/EntityServices/types';
import { PostDetails } from '../types';

export const usePostDetails = (
  postId: string
): DataLoad<PostDetails | undefined> => {
  const postDocumentReference = React.useMemo(
    () => doc(getFirestore(), 'posts', postId),
    [postId]
  ) as DocumentReference<PostDetails> | undefined;

  const [response, loading] = useDocumentOnce<PostDetails>(
    postDocumentReference
  );

  const result = React.useMemo(() => {
    return response && { ...response.data(), id: response.id ?? '' };
  }, [response]);

  return { result, loading };
};
