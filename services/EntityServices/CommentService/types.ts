import { DataLoad } from 'services/EntityServices/types';

export interface Comment {
  id: string;
  entityId: string;
  userDisplayName: string;
  userPhotoUrl: string;
  body: string;
  timestamp: string;
  commentId?: string;
}

export interface CommentService {
  getComments: (entityId: string) => DataLoad<Comment[]>;
}
