import LoginForm from '@/components/login/login-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Dogs',
  description: 'Logue na sua conta do Dogs.',
};

export default async function LoginPage() {
  return (
    <div className='animeLeft'>
      <h1 className='title'>Login</h1>
      <LoginForm />
    </div>
  );
}
