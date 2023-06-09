import styles from './Header.module.sass';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Memory Game</h1>
    </header>
  );
}