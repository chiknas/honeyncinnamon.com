export const routes = {
  home: '/',
  donate: '/donate',
  recipes: '/recipes',
  recipe: (id: string) => `/recipe/${id}`,
  posts: '/posts',
  post: (id: string) => `/post/${id}`,
  'contact-us': '/contact',
  register: '/register',
  privacyPolicy: '/privacy-policy',
  cookiePolicy: '/cookie-policy',
};
