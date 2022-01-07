import {
  collection,
  addDoc,
  getFirestore,
  serverTimestamp,
  CollectionReference,
  doc,
  increment,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import {
  Comment,
  CommentNew,
} from 'services/EntityServices/CommentService/types';

export const postComment = async (
  comment: CommentNew
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
  ).then((e) => {
    const entityRef = doc(getFirestore(), comment.entityType, comment.entityId);
    updateDoc(entityRef, { commentCount: increment(1) }).catch((e) =>
      console.error(e)
    );

    return e as unknown as Comment;
  });
};

export const deleteComment = async (comment: Comment): Promise<void> => {
  return comment.id
    ? deleteDoc(doc(getFirestore(), 'comments', comment.id)).then(() => {
        const entityRef = doc(
          getFirestore(),
          comment.entityType,
          comment.entityId
        );
        updateDoc(entityRef, { commentCount: increment(-1) }).catch((e) =>
          console.error(e)
        );
      })
    : new Promise((resolve) => resolve());
};
