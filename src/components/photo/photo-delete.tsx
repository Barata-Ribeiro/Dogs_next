'use client';

import photoDelete from '@/actions/photo-delete';
import { useState } from 'react';
import styles from './photo-delete.module.css';

export default function PhotoDelete({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  async function handleDeletion() {
    setLoading(true);

    const confirm = window.confirm('Tem certeza que deseja deletar a foto?');
    if (confirm) await photoDelete(id);

    setLoading(false);
  }
  return (
    <button className={styles.delete} onClick={handleDeletion} disabled={loading}>
      {loading ? 'Deletando...' : 'Deletar'}
    </button>
  );
}
