import { FC } from 'react'
import styles from "./Footer.module.css";
import Link from 'next/link';


const Footer: FC = () => {
  return <footer className={styles.footer}>
  <Link href={'./faq'}>Вопросы-ответы</Link>
  <Link href={'./about'}>О нас</Link>
</footer>
}

export default Footer