'use client';

import PhotoComments from '@/components/photo/photo-comments';
import PhotoDelete from '@/components/photo/photo-delete';
import { useUser } from '@/context/user-context';
import { PhotoData } from '@/interfaces/photo';
import Image from 'next/image';
import Link from 'next/link';
import styles from './photo-content.module.css';

const PhotoContent = ({ data, single }: { data: PhotoData; single: boolean }) => {
  const { user } = useUser();
  const { photo, comments } = data;

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image
          src={photo.src}
          alt={photo.title}
          title={photo.title}
          width={1000}
          height={1000}
          sizes='100vw'
        />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user && user.username === photo.author ? (
              <PhotoDelete id={String(photo.id)} />
            ) : (
              <Link href={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className='title'>
            <Link href={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} Kg</li>
            <li>
              {photo.idade === '1' ? `${photo.idade} ano` : `${photo.idade} anos`}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
