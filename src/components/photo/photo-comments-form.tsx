'use client';

import commentPost from '@/actions/commentPost';
import ErrorMessage from '@/components/helper/error-message';
import EnviarIcon from '@/icons/enviar.icon';
import { Comment } from '@/interfaces/photo';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import styles from './photo-comments-form.module.css';

interface PhotoCommentsFormProps {
  single: boolean;
  id: number;
  setComments: Dispatch<SetStateAction<Comment[]>>;
}

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button className={styles.button} type='submit' disabled={pending}>
      <EnviarIcon />
    </button>
  );
}

export default function PhotoCommentsForm(props: PhotoCommentsFormProps) {
  const [state, action] = useFormState(commentPost, {
    ok: false,
    data: null,
    error: '',
  });

  useEffect(() => {
    if (state.ok && state.data)
      props.setComments((comments) => [...comments, state.data]);
    setComment('');
  }, [state, props.setComments]);

  const [comment, setComment] = useState('');

  return (
    <form
      action={action}
      className={`${styles.form} ${props.single ? styles.single : ''}`}>
      <input type='hidden' name='id' id='id' value={props.id} />
      <textarea
        className={styles.textarea}
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        name='comment'
        id='coment'
        placeholder='Comente...'></textarea>
      <FormButton />
      <ErrorMessage error={state.error} />
    </form>
  );
}
