'use client';

import PhotoContent from '@/components/photo/photo-content';
import { PhotoData } from '@/interfaces/photo';
import { usePathname, useRouter } from 'next/navigation';
import type { MouseEvent } from 'react';
import styles from './feed-modal.module.css';

export default function FeedModal({ photo }: { photo: PhotoData }) {
  const router = useRouter();
  const pathname = usePathname();

  if (!pathname.includes('foto')) return null;

  function handleOutsideClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) router.back();
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <PhotoContent data={photo} single={false} />
    </div>
  );
}
