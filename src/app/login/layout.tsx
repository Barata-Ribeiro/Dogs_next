import type { ReactNode } from 'react';
import styles from './login.module.css';

export default async function LoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>{children}</div>
    </section>
  );
}
