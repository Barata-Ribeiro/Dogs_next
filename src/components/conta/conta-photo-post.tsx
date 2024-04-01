'use client';

import photoPost from '@/actions/photo-post';
import Button from '@/components/forms/button';
import Input from '@/components/forms/input';
import ErrorMessage from '@/components/helper/error-message';
import { useState, type ChangeEvent } from 'react';
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
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: '',
    data: null,
  });

  const [img, setImg] = useState('');

  function handleImageChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (target.files) setImg(URL.createObjectURL(target.files[0]));
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action}>
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
      <div>
        {img && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img}')` }}></div>
        )}
      </div>
    </section>
  );
}
