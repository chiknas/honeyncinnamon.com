import {
  postComment,
  deleteComment,
  updateComment,
} from './functions/CommentPost';
import { useCommentsByEntityId } from './hooks/useCommentsById';
import { useCommentAggregation } from './hooks/useCommentAggregation';
import { CommentService } from './types';

export const useCommentService = (): CommentService => {
  return {
    getComments: useCommentsByEntityId,
    postComment,
    deleteComment,
    updateComment,
    getCommentAggregation: useCommentAggregation,
  };
};
