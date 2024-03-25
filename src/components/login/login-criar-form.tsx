'use client';

import userPost from '@/actions/user-post';
import Button from '@/components/forms/button';
import Input from '@/components/forms/input';
import ErrorMessage from '@/components/helper/error-message';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import styles from './login-form.module.css';

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <Button type='submit' disabled={pending} aria-label='Cadastrar'>
      {pending ? 'Cadastrando...' : 'Cadastrar'}
    </Button>
  );
}

export default function LoginCriarForm() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: '',
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);

  return (
    <form className={styles.form} action={action}>
      <Input
        label='Usuário'
        name='username'
        autoComplete='username'
        placeholder='Usuário'
      />
      <Input
        type='email'
        label='Email'
        name='email'
        autoComplete='email'
        placeholder='contato@exemplo.com'
      />
      <Input
        type='password'
        label='Senha'
        name='password'
        placeholder='Senha'
        autoComplete='current-password'
      />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
