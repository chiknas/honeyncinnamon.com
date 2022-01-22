export interface ContactMessage {
  fullName: string;
  subject: string;
  email: string;
  body: string;
}

export const isContactMessage = (value: any): value is ContactMessage => {
  return (
    (value as ContactMessage).email !== undefined &&
    (value as ContactMessage).body !== undefined
  );
};
