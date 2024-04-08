'use server';

import { TOKEN_VALIDATE_POST } from '@/functions/api';
import apiError from '@/functions/api-error';
import { cookies } from 'next/headers';

export default async function validateToken() {
  try {
    const URL = TOKEN_VALIDATE_POST();
    const token = cookies().get('authToken')?.value;
    if (!token) throw new Error('Faça login para continuar.');

    const response = await fetch(URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error('Erro ao validar token.');

    const data = await response.json();

    return { data, ok: true, error: '' };
  } catch (error) {
    return apiError(error);
  }
}
