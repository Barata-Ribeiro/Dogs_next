'use client';

import passwordLost from '@/actions/password-lost';
import Button from '@/components/forms/button';
import Input from '@/components/forms/input';
import ErrorMessage from '@/components/helper/error-message';
import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import styles from './login-form.module.css';

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <Button type='submit' disabled={pending} aria-label='Enviar Email'>
      {pending ? 'Enviando...' : 'Enviar Email'}
    </Button>
  );
}

export default function LoginPerdeuForm() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: '',
    data: null,
  });

  const [url, setUrl] = useState('');

  useEffect(() => setUrl(window.location.href.replace('perdeu', 'resetar')), []);

  return (
    <form className={styles.form} action={action}>
      <Input
        label='Usuário / Email'
        name='usernamelogin'
        placeholder='Usuário ou Email'
      />
      <input type='hidden' name='url' value={url} />
      <ErrorMessage error={state.error} />
      {state.ok ? <p style={{ color: '#4c1' }}>Email enviado.</p> : <FormButton />}
    </form>
  );
}
