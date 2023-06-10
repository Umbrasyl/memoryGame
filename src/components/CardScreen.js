import Card from './Card';
import styles from './CardScreen.module.sass';
import cardsData from "../cards/cards.json";
import { useState } from 'react';

const orderSet = [];
for (let i = 0; i < cardsData.length; i++) {
  orderSet.push(i);
}

export default function CardScreen({ scoreUpdater }) {
  const [orders, setOrders] = useState(orderSet);
  const [isClicked, setIsClicked] = useState((new Array(16)).fill(false));
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

  function shuffler() {
    setOrders(shuffle(orderSet));
  }

  function handleClick(e) {
    e.preventDefault();
    const index = e.currentTarget.getAttribute("data-key");
    if (isClicked[index] === false) {
      const newIsClicked = [...isClicked];
      newIsClicked[index] = true;
      setIsClicked(newIsClicked);
      scoreUpdater("add");
    } else {
      setIsClicked((new Array(16)).fill(false));
      scoreUpdater("reset");
    }
    shuffler();
  }

  return (
    <div className={styles.cardScreen}>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          dataKey={index}
          cardImg={images[index]}
          cardName={card.name}
          handleClick={handleClick}
          order={orders[index]}
        />
      ))}
    </div>
  );
}