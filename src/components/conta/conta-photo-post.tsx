'use client';

import userPost from '@/actions/user-post';
import Button from '@/components/forms/button';
import Input from '@/components/forms/input';
import ErrorMessage from '@/components/helper/error-message';
import { type ChangeEvent, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import styles from './conta-photo-post.module.css';

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <Button type='submit' disabled={pending} aria-label='Enviar'>
      {pending ? 'Enviando...' : 'Enviar'}
    </Button>
  );
}

export default function ContaPhotoPost() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: '',
    data: null,
  });

  const [img, setImg] = useState('');

  function handleImageChange({ target }: ChangeEvent<HTMLInputElement>) {}

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form className={styles.form} action={action}>
        <Input label='Nome' name='nome' placeholder='Ex: Thor' />
        <Input type='number' label='Peso' name='peso' />
        <Input type='number' label='Idade' name='idade' />
        <input
          onChange={handleImageChange}
          type='file'
          name='img'
          id='img'
          className={styles.file}
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </section>
  );
}
