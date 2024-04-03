'use server';

import { PHOTOS_GET } from '@/functions/api';
import apiError from '@/functions/api-error';
import { Photo, PhotosGetParams } from '@/interfaces/photo';

export default async function photosGet(
  { page = 1, total = 6, user = 0 }: PhotosGetParams = {},
  optionsFetch?: RequestInit
) {
  try {
    const options = optionsFetch || { next: { revalidate: 10, tags: ['photos'] } };
    const URL = PHOTOS_GET({ page, total, user });

    const response = await fetch(URL, options);

    if (!response.ok) throw new Error('Erro ao buscar as fotos.');
    
    const data = (await response.json()) as Photo[];

    return { data, ok: true, error: '' };
  } catch (error) {
    return apiError(error);
  }
}
