import { useDispatch, useSelector } from "react-redux";
import { addBasket, removeBasket } from "../redux/cardSlice";

function Card({ id, name, photo, price, number }) {
  const initialMoney = useSelector((state) => state.card.money);
  const dispatch = useDispatch();
  const addToBasket = () => {
    dispatch(
      addBasket({
        id,
        name,
        price: Number(price.split(".").join("")),
        amount: 1,
      })
    );
  };

  const removeToBasket = () => {
    dispatch(
      removeBasket({
        id,
        price: Number(price.split(".").join("")),
      })
    );
  };

  return (
    <div key={id} className="card">
      <img src={photo} alt="" />
      <h4>{name}</h4>
      <p>
        <b style={{ fontSize: "20px" }} className="green">
          ${price}
        </b>
      </p>
      <div className="card-button">
        <button disabled={number === 0 && "disabled"} onClick={removeToBasket} className="dec-button">
          Azalt
        </button>
        <input
          readOnly
          className="price"
          type="text"
          value={number !== 0 ? number : ""}
        />
        <button disabled={initialMoney < Number(price.split(".").join("")) && "disabled"} onClick={addToBasket} className="inc-button">
          Arttır
        </button>
      </div>
    </div>
  );
}

export default Card;