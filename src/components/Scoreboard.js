import styles from "./Scoreboard.module.sass";

export default function Scoreboard() {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.score}>
        <span className={styles.label}>Score</span>
        <span className={styles.value}>0</span>
      </div>
      <div className={styles.score}>
        <span className={styles.label}>Best</span>
        <span className={styles.value}>0</span>
      </div>
    </div>
  );
}