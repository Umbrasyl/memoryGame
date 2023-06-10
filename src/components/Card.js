import styles from './Card.module.sass';

export default function Card({ dataKey, cardImg, cardName, handleClick, order }) {

  return (
    <div data-key={dataKey} onClick={handleClick} className={styles.card} style={{ order: order }}>
      <img className={styles.image} src={cardImg} alt={cardName} />
      <div className={styles.name}>{cardName}</div>
    </div>
  );
}