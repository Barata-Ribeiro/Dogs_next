import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perdeu a senha? | Dogs',
  description: 'Recupere sua senha do Dogs.',
};

export default async function PerdeuPage() {
  return (
    <main>
      <h1>Perdeu</h1>
    </main>
  );
}
