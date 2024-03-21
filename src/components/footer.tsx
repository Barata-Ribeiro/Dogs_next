import Image from 'next/image';
import styles from './footer.module.css';

export default async function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src='/assets/dogs-footer.svg'
        alt='Dogs logo'
        width={28}
        height={22}
      />
      <p>Dog. Alguns direitos reservados.</p>
    </footer>
  );
}
