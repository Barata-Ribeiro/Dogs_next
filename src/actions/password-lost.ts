'use server';

import { PASSWORD_LOST } from '@/functions/api';
import apiError from '@/functions/api-error';
import { State } from '@/interfaces/form';

export default async function passwordLost(state: State, formData: FormData) {
  const login = formData.get('login') as string | null;
  const pass_url = formData.get('url') as string | null;
  const URL = PASSWORD_LOST();

  try {
    if (!login) throw new Error('Forneça seu email ou usuário.');

    const response = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login, url: pass_url }),
    });

    if (!response.ok) throw new Error('Email ou usuário não encontrado.');

    return {
      ok: true,
      error: '',
      data: null,
    };
  } catch (error: unknown) {
    return apiError(error);
  }
}
