import styles from "./Scoreboard.module.sass";

export default function Scoreboard({ score, highScore }) {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.score}>
        <span className={styles.label}>Score</span>
        <span className={styles.value}> {score}</span>
      </div>
      <div className={`${styles.score} ${styles.best}`}>
        <span className={styles.label}>Best</span>
        <span className={styles.value}> {highScore}</span>
      </div>
    </div>
  );
}