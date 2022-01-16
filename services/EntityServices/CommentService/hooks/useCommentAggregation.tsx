import { doc, getFirestore, DocumentReference } from 'firebase/firestore';
import React from 'react';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import { DataLoad } from 'services/EntityServices/types';
import { CommentAggregation } from '../types';

export const useCommentAggregation = (
  entityId: string
): DataLoad<CommentAggregation | undefined> => {
  const documentReference = React.useMemo(
    () => doc(getFirestore(), 'commentAggregation', entityId),
    [entityId]
  ) as DocumentReference<CommentAggregation> | undefined;

  const [response, loading] =
    useDocumentOnce<CommentAggregation>(documentReference);

  const result = React.useMemo(() => {
    return response && { ...response.data(), id: response.id ?? '' };
  }, [response]);

  return { result, loading };
};
