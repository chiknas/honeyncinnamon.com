import { NewsletterService } from './types';
import { register } from './functions/Register';

export const useNewsletterService = (): NewsletterService => {
  return {
    register,
  };
};
