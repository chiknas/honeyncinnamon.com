import { DataLoad } from '../types';

export interface PostDetails {
  id: string;
  commentCount?: number;
}

export interface PostService {
  getPostDetails: (postId: string) => DataLoad<PostDetails | undefined>;
}
