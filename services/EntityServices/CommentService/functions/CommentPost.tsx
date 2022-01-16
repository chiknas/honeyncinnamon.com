import {
  collection,
  addDoc,
  getFirestore,
  serverTimestamp,
  CollectionReference,
  doc,
  setDoc,
  increment,
  updateDoc,
  deleteDoc,
  getDoc,
  DocumentReference,
} from 'firebase/firestore';
import {
  Comment,
  CommentAggregation,
} from 'services/EntityServices/CommentService/types';

export const postComment = async (
  comment: Comment
): Promise<Comment | undefined> => {
  if (!comment.body || comment.body === '') {
    return new Promise<undefined>(() => undefined);
  }

  return addDoc<Comment>(
    collection(getFirestore(), 'comments') as CollectionReference<Comment>,
    {
      ...comment,
      timestamp: serverTimestamp(),
    }
  ).then(async (e) => {
    const entityRef = doc(
      getFirestore(),
      'commentAggregation',
      comment.entityId
    ) as DocumentReference<Omit<CommentAggregation, 'id'>>;
    const entityRefSnap = await getDoc(entityRef);
    const commentCount = (entityRefSnap?.data()?.commentCount ?? 0) + 1;
    setDoc(entityRef, {
      commentCount,
    }).catch((e) => console.error(e));

    return e as unknown as Comment;
  });
};

export const updateComment = async (comment: Comment): Promise<void> => {
  if (!comment.body || comment.body === '' || comment.id === undefined) {
    return new Promise<undefined>(() => undefined);
  }

  const commentRef = doc(getFirestore(), 'comments', comment.id);
  return setDoc(commentRef, comment);
};

export const deleteComment = async (comment: Comment): Promise<void> => {
  return comment.id
    ? deleteDoc(doc(getFirestore(), 'comments', comment.id)).then(() => {
        const entityRef = doc(
          getFirestore(),
          'commentAggregation',
          comment.entityId
        );
        updateDoc(entityRef, { commentCount: increment(-1) }).catch((e) =>
          console.error(e)
        );
      })
    : new Promise((resolve) => resolve());
};
