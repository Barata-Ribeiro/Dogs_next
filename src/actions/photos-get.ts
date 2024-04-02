'use server';

import { PHOTOS_GET } from '@/functions/api';
import apiError from '@/functions/api-error';
import { Photo, PhotosGetParams } from '@/interfaces/photo';

export default async function photosGet({
  page = 1,
  total = 6,
  user = 0,
}: PhotosGetParams = {}) {
  try {
    const URL = PHOTOS_GET({ page, total, user });

    const response = await fetch(URL, { next: { revalidate: 10, tags: ['photos'] } });

    const data = (await response.json()) as Photo[];

    if (!response.ok) throw new Error('Erro ao buscar as fotos.');

    return { data, ok: true, error: '' };
  } catch (error) {
    return apiError(error);
  }
}
