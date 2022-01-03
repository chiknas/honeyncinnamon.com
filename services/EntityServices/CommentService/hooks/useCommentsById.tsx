import React from 'react';
import { Comment } from 'services/EntityServices/CommentService/types';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import {
  getFirestore,
  collection,
  where,
  query,
  Query,
} from 'firebase/firestore';
import { DataLoad } from 'services/EntityServices/types';

export const useCommentsByEntityId = (
  entityId: string
): DataLoad<Comment[]> => {
  const commentsRef = React.useMemo(
    () =>
      query(
        collection(getFirestore(), 'comments'),
        where('entityId', '==', entityId)
      ) as Query<Comment>,
    [entityId]
  );
  const [response, loading] = useCollectionOnce<Comment>(commentsRef);

  const comments = React.useMemo(
    () =>
      response?.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })),
    [response?.docs]
  );

  return { result: comments ?? [], loading };
};
