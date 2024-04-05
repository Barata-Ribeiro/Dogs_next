export interface Photo {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
}

export interface Photos {
  photos: Photo[];
  user?: 0 | string;
}

export interface PhotosGetParams {
  page?: number;
  total?: number;
  user?: 0 | string;
}

export interface PhotosGet {
  page: number;
  total: number;
  user: 0 | string;
}

export interface Comment {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_author_email: string;
  comment_author_url: string;
  comment_author_IP: string;
  comment_date: string;
  comment_date_gmt: string;
  comment_content: string;
  comment_karma: string;
  comment_approved: string;
  comment_agent: string;
  comment_type: string;
  comment_parent: string;
  user_id: string;
}

export interface PhotoData {
  photo: Photo;
  comments: Comment[];
}

export interface PhotoStatsData {
  id: number;
  title: string;
  acessos: string;
}
