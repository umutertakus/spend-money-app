import { useSelector } from "react-redux";
import Card from "./Card";

function CardList() {
  const cards = useSelector((state) => state.card.items);
  return (
    <div className="container">
      {cards.map((card) => (
        <Card key={card.id} id={card.id} name={card.name} photo={card.photo} price={card.price} number={card.number} />
      ))}
    </div>
  );
}

export default CardList;