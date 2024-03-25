'use server';

import login from '@/actions/login';
import { USER_POST } from '@/functions/api';
import apiError from '@/functions/api-error';
import { State } from '@/interfaces/form';

export default async function userPost(state: State, formData: FormData) {
  const username = formData.get('username') as string | null;
  const email = formData.get('email') as string | null;
  const password = formData.get('password') as string | null;
  const URL = USER_POST();

  try {
    if (!username || !email || !password)
      throw new Error('Formulário precisa ser preenchido.');

    if (password.length < 6)
      throw new Error('Senha precisa ter no mínimo 6 caracteres.');

    const response = await fetch(URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Email ou usuário já existe.');
    const { ok } = await login({ ok: true, error: '', data: null }, formData);
    if (!ok) throw new Error('Erro ao logar.');

    return {
      ok: true,
      error: '',
      data: null,
    };
  } catch (error: unknown) {
    return apiError(error);
  }
}
