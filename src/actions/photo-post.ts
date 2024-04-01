'use server';

import { PHOTO_POST } from '@/functions/api';
import apiError from '@/functions/api-error';
import { State } from '@/interfaces/form';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function photoPost(state: State, formData: FormData) {
  const token = cookies().get('authToken')?.value;

  const nome = formData.get('nome') as string | null;
  const idade = formData.get('idade') as string | null;
  const peso = formData.get('peso') as string | null;
  const img = formData.get('img') as File;
  const URL = PHOTO_POST();

  try {
    if (!token) throw new Error('Faça login para continuar.');

    if (!nome || !idade || !peso || img.size === 0)
      throw new Error('Preencha todos os campos.');

    const response = await fetch(URL, {
      method: 'POST',
      headers: { authorization: `Bearer ${token}` },
      body: formData,
    });

    if (!response.ok)
      throw new Error('Erro ao enviar foto. Tente novamente mais tarde.');
  } catch (error: unknown) {
    return apiError(error);
  }

  revalidateTag('photos');
  redirect('/conta');
}
