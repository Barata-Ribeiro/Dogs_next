import { PhotosGet } from '@/interfaces/photo';

export const API_URL = 'https://dogsapi.origamid.dev/json';

export const TOKEN_POST = () => {
  return `${API_URL}/jwt-auth/v1/token`;
};

export const TOKEN_VALIDATE_POST = () => {
  return `${API_URL}/jwt-auth/v1/token/validate`;
};

export const USER_GET = () => {
  return `${API_URL}/api/user`;
};

export const USER_POST = () => {
  return `${API_URL}/api/user`;
};

export const PHOTO_POST = () => {
  return `${API_URL}/api/photo`;
};

export const PHOTOS_GET = ({ page, total, user }: PhotosGet) => {
  return `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`;
};

export const PHOTO_GET = (id: string) => {
  return `${API_URL}/api/photo/${id}`;
};

export const COMMENT_POST = (id: string) => {
  return `${API_URL}/api/comment/${id}`;
};

export const PHOTO_DELETE = (id: string) => {
  return `${API_URL}/api/photo/${id}`;
};

export const PASSWORD_LOST = () => {
  return `${API_URL}/api/password/lost`;
};

export const PASSWORD_RESET = () => {
  return `${API_URL}/api/password/reset`;
};

export const STATS_GET = () => {
  return `${API_URL}/api/stats`;
};
