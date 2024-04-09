import userGet from '@/actions/user-get';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { UserContextProvider } from '@/context/user-context';
import { type_second } from '@/functions/fonts';
import { User } from '@/interfaces/user';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Rede social para cachorros.',
};

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  const { data: user } = (await userGet()) as { data: User };

  return (
    <html lang='pt-BR'>
      <body className={type_second.variable}>
        <UserContextProvider user={user}>
          <div className='App'>
            <Header />
            <main className='AppBody'>{children}</main>
            <div>{modal}</div>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
