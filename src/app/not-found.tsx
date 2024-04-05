import Link from 'next/link';

export default function NotFound() {
  return (
    <section
      className='container'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
      <h1 className='title'>Página não encontrada</h1>
      <Link href='/' className='button'>
        Volte para a home
      </Link>
    </section>
  );
}
