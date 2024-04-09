import photoGet from '@/actions/photo-get';
import FeedModal from '@/components/feed/feed-modal';
import { notFound } from 'next/navigation';

interface PhotoIdarams {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PhotoIdarams) {
  const { data } = await photoGet(params.id);

  if (!data) return { title: 'Foto' };
  return {
    title: data.photo.title + ' | Dogs',
  };
}

export default async function FotoIdPage({ params }: PhotoIdarams) {
  const { data } = await photoGet(params.id);
  if (!data) return notFound();

  return (
    <section className='container mainContainer'>
      <FeedModal photo={data} />
    </section>
  );
}
