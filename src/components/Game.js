import Scoreboard from './Scoreboard';
import CardScreen from './CardScreen';
import styles from './Game.module.sass';
import { useState } from 'react';

export default function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function updateScore(s) {
    if (s === "add") {
      setScore(score + 1);
    } else if (s === "reset") {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
    }
  }

  return (
    <div className={styles.game}>
      <Scoreboard score={score} highScore={highScore} />
      <CardScreen scoreUpdater={updateScore}/>
    </div>
  );
}