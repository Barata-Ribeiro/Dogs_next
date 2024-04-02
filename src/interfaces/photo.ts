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
