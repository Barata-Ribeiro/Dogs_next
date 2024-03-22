'use client';

import login from '@/actions/login';
import Button from '@/components/forms/button';
import Input from '@/components/forms/input';
import ErrorMessage from '@/components/helper/error-message';
import Link from 'next/link';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import styles from './login-form.module.css';

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

  useEffect(() => {
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);

  return (
    <>
      <form className={styles.form} action={action}>
        <Input
          label='Usuário'
          name='username'
          autoComplete='username'
          placeholder='Usuário'
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
      <Link className={styles.recuperar} href='/login/perdeu'>
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className='button' href='/login/criar'>Cadastro</Link>
      </div>
    </>
  );
}
