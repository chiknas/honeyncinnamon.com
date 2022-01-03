import { usePostDetails } from './hooks/usePostDetails';
import { PostService } from './types';

export const usePostService = (): PostService => {
  return { getPostDetails: usePostDetails };
};
