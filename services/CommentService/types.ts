import { User } from 'services/UserService/types';

export interface Comment {
  id: string;
  entityId: string;
  user: User;
  body: string;
  timestamp: string;
  commentId?: string;
}

export interface CommentService {
  getComments(entityId: string): Comment[];
}
