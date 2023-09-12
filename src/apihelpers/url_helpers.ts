export const baseURL =
  process.env.NEXT_PUBLIC_API_KEY ??
  'http://localhost:4200';

export const POST_LOGIN = `${baseURL}/auth/login`;
