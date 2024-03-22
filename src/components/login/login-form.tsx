'use client';

import login from '@/actions/login';
import Button from '@/components/forms/button';
import { useFormState, useFormStatus } from 'react-dom';

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <Button type='submit' disabled={pending} aria-label='Entrar'>
      {pending ? 'Carregando...' : 'Entrar'}
    </Button>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <>
      <form action={action}>
        <input
          type='text'
          name='username'
          autoComplete='username'
          placeholder='Usuário'
        />
        <input
          type='password'
          name='password'
          placeholder='Senha'
          autoComplete='current-password'
        />
        <FormButton />
        {state.error && <p>{state.error}</p>}
      </form>
    </>
  );
}
