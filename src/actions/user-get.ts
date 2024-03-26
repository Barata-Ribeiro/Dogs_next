'use server';

import { USER_GET } from '@/functions/api';
import apiError from '@/functions/api-error';
import { User } from '@/interfaces/user';
import { cookies } from 'next/headers';

export default async function userGet() {
  const URL = USER_GET();

  try {
    const token = cookies().get('authToken')?.value;
    if (!token) throw new Error('Token não encontrado.');

    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) throw new Error('Error ao buscar usuário.');

    const data = (await response.json()) as User;

    return {
      ok: true,
      error: '',
      data,
    };
  } catch (error: unknown) {
    return apiError(error);
  }
}
