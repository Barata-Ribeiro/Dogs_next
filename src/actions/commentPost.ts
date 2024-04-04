'use server';

import { COMMENT_POST } from '@/functions/api';
import apiError from '@/functions/api-error';
import { State } from '@/interfaces/form';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export default async function commentPost(state: State, formData: FormData) {
  const token = cookies().get('authToken')?.value;

  const comment = formData.get('comment') as string | null;
  const id = formData.get('id') as string | null;

  try {
    if (!token) throw new Error('Faça login para continuar.');
    if (!comment || comment.trim().length === 0)
      throw new Error('Escreva um comentário antes de enviar.');
    if (!id) throw new Error('Erro ao enviar comentário. Tente novamente mais tarde.');

    const URL = COMMENT_POST(id);

    const response = await fetch(URL, {
      method: 'POST',
      headers: { authorization: `Bearer ${token}` },
      body: formData,
    });

    if (!response.ok)
      throw new Error('Erro ao enviar comentário. Tente novamente mais tarde.');

    const data = await response.json();

    revalidateTag('comment');
    
    return { ok: true, data, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
