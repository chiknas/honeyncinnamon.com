export interface NewsletterService {
  // sends the specified email to be saved to the server.
  register: (email: string) => Promise<void>;
}
