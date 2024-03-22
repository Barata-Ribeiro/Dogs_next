import { Photos } from '@/interfaces/photo';
import Image from 'next/image';
import Link from 'next/link';
import styles from './feed.module.css';

export default function FeedPhotos({ photos }: Photos) {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((photo, i) => (
        <li
          key={photo.id + '_' + i}
          id={photo.id + '_' + i}
          className={styles.photo}>
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              alt={`${photo.title}, Foto de: ${photo.author}`}
              title={`${photo.title}, Foto de: ${photo.author}`}
              width={1500}
              height={1500}
              sizes='80vw'
            />
            <span className={styles.visualizacao}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
