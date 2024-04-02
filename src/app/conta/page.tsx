import photosGet from '@/actions/photos-get';
import userGet from '@/actions/user-get';
import Feed from '@/components/feed/feed';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Minha Conta',
};

export default async function ContaPage() {
  const { data: user } = await userGet();
  const { data: photos } = await photosGet({ user: user?.username });

  return (
    <section>
      {photos?.length ? (
        <Feed photos={photos} user={user?.username} />
      ) : (
        <span>
          <p style={{ color: '#444', fontSize: '1.25rem', marginBottom: '1rem' }}>
            Não há nenhuma foto. Poste uma para começar!
          </p>
          <Link
            href='/conta/postar'
            style={{ display: 'inline-block' }}
            className='button'>
            Postar nova foto
          </Link>
        </span>
      )}
    </section>
  );
}
