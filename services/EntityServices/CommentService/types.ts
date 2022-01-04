import { DataLoad } from 'services/EntityServices/types';

export enum EntityType {
  POSTS = 'posts',
  RECIPES = 'recipes',
}

/**
 * Comments as returned from the server
 */
export interface Comment {
  id?: string;
  entityId: string;
  userDisplayName: string;
  userPhotoUrl: string;
  body: string;
  timestamp: string;
  entityType: EntityType;
  commentId?: string;
}

/**
 * Mutation object to give to the BE to create a new comment
 */
export interface CommentNew {
  entityId: string;
  userDisplayName: string;
  userPhotoUrl: string;
  body: string;
  // is it a post or a recipe?
  entityType: EntityType;
  commentId?: string;
}

export interface CommentService {
  getComments: (entityId: string) => DataLoad<Comment[]>;
  postComment: (comment: CommentNew) => Promise<Comment | undefined>;
}
