'use server';

import { STATS_GET } from '@/functions/api';
import apiError from '@/functions/api-error';
import { PhotoStatsData } from '@/interfaces/photo';
import { cookies } from 'next/headers';

export default async function statsGet() {
  try {
    const URL = STATS_GET();
    const token = cookies().get('authToken')?.value;
    if (!token) throw new Error('Faça login para continuar.');

    const response = await fetch(URL, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 60 },
    });

    if (!response.ok)
      throw new Error('Erro ao buscar os dados. Tente novamente mais tarde.');

    const data = (await response.json()) as PhotoStatsData[];

    return { data, ok: true, error: '' };
  } catch (error) {
    return apiError(error);
  }
}
