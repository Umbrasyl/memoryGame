import Card from './Card';
import styles from './CardScreen.module.sass';
import cardsData from "../cards/cards.json";
import { useState } from 'react';

const orderSet = [];
for (let i = 0; i < cardsData.length; i++) {
  orderSet.push(i);
}

export default function CardScreen() {
  const [orders, setOrders] = useState(orderSet);
  const imgContext = require.context('../cards', false, /\.jpg$/);
  const images = imgContext.keys().map(imgContext);

  function shuffle(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(orderSet);
    console.log(orders);
    console.log(shuffle(orderSet));
    setOrders(shuffle(orderSet));
  }

  return (
    <div className={styles.cardScreen}>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          cardImg={images[index]}
          cardName={card.name}
          handleClick={handleClick}
          order={orders[index]}
        />
      ))}
    </div>
  );
}