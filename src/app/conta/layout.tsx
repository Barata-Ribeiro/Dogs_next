import ContaHeader from '@/components/conta/conta-header';
import type { ReactNode } from 'react';

export default async function ContaLayout({ children }: { children: ReactNode }) {
  return (
    <section className='container'>
      <ContaHeader />
      {children}
    </section>
  );
}
