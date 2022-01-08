import { DataLoad } from 'services/EntityServices/types';

// what entities in the system can have comments
export enum CommentEntityType {
  POSTS = 'posts',
  RECIPES = 'recipes',
}

export interface Comment {
  id?: string;
  entityId: string;
  userId: string;
  userDisplayName: string;
  userPhotoUrl: string;
  body: string;
  timestamp?: string;
  entityType: CommentEntityType;
  commentId?: string;
}

export interface CommentService {
  getComments: (entityId: string) => DataLoad<Comment[]>;
  postComment: (comment: Comment) => Promise<Comment | undefined>;
  updateComment: (comment: Comment) => Promise<void>;
  deleteComment: (comment: Comment) => Promise<void>;
}
