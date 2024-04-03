'use client';

import photosGet from '@/actions/photos-get';
import FeedPhotos from '@/components/feed/feed-photos';
import Loading from '@/components/helper/loading';
import { Photo, Photos } from '@/interfaces/photo';
import { useEffect, useRef, useState } from 'react';
import styles from './feed.module.css';

export default function Feed({ photos, user }: Photos) {
  const [photosFeed, setPhotosFeed] = useState<Photo[]>(photos);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [infinite, setInfinite] = useState(photos.length < 6 ? false : true);
  const fetching = useRef(false);

  function infiniteScroll() {
    if (fetching.current) return;

    fetching.current = true;
    setLoading(true);

    setTimeout(() => {
      setPage((currentage) => currentage + 1);
      fetching.current = false;
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    if (page === 1) return;
    async function getPagePhotos(page: number) {
      const actionData = await photosGet(
        { page, total: 6, user },
        { cache: 'no-store' }
      );
      if (actionData && actionData.data !== null && actionData.data !== undefined) {
        const { data } = actionData;
        setPhotosFeed((currentPhotos) => [...currentPhotos, ...data]);
        if (data.length < 6) setInfinite(false);
      }
    }

    getPagePhotos(page);
  }, [page]);

  useEffect(() => {
    if (infinite) {
      window.addEventListener('scroll', infiniteScroll);
      window.addEventListener('wheel', infiniteScroll);
    } else {
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel', infiniteScroll);
    }

    return () => {
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel', infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      <FeedPhotos photos={photosFeed} />
      <div className={styles.loadingWrapper}>
        {infinite ? loading && <Loading /> : <p>Não existem mais postagens.</p>}
      </div>
    </div>
  );
}
