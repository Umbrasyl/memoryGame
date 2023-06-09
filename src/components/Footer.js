import styles from './Footer.module.sass';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Made with <span className={styles.heart}>♥</span> by
        <a className={styles.link} href="https://github.com/Umbrasyl"> Murat ULUTÜRK</a>
      </p>
    </footer>
  );
}