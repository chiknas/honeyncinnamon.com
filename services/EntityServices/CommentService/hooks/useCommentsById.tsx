import React, { useEffect } from 'react';
import { Comment } from 'services/EntityServices/CommentService/types';
import { useCollection } from 'react-firebase-hooks/firestore';
import {
  getFirestore,
  collection,
  where,
  query,
  Query,
  orderBy,
} from 'firebase/firestore';
import { DataLoad } from 'services/EntityServices/types';

export const useCommentsByEntityId = (
  entityId: string
): DataLoad<Comment[]> => {
  const commentsRef = React.useMemo(
    () =>
      query(
        collection(getFirestore(), 'comments'),
        where('entityId', '==', entityId),
        orderBy('timestamp', 'desc')
      ) as Query<Comment>,
    [entityId]
  );
  const [response, loading, error] = useCollection<Comment>(commentsRef);

  const comments = React.useMemo(
    () =>
      response?.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })),
    [response?.docs]
  );

  useEffect(() => console.error(error), [error]);

  return { result: comments ?? [], loading };
};
