'use server';

import { PHOTO_GET } from '@/functions/api';
import apiError from '@/functions/api-error';
import { PhotoData } from '@/interfaces/photo';

export default async function photoGet(id: string) {
  try {
    const URL = PHOTO_GET(id);

    const response = await fetch(URL, {
      next: { revalidate: 60, tags: ['photos', 'comment'] },
    });

    if (!response.ok) throw new Error('Erro ao buscar a foto.');

    const data = (await response.json()) as PhotoData;

    return { data, ok: true, error: '' };
  } catch (error) {
    return apiError(error);
  }
}
