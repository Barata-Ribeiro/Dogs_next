'use client';

import passwordReset from '@/actions/password-reset';
import Button from '@/components/forms/button';
import Input from '@/components/forms/input';
import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import styles from './login-form.module.css';

interface LoginResetarFormProps {
  keyToken: string;
  login: string;
}

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <Button type='submit' disabled={pending} aria-label='Resetar Senha'>
      {pending ? 'Resetando...' : 'Resetar Senha'}
    </Button>
  );
}

export default function LoginResetarForm({ keyToken, login }: LoginResetarFormProps) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <form className={styles.form} action={action}>
      <Input type='passowrd' label='Nova Senha' name='password' />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />
      <FormButton />
    </form>
  );
}
