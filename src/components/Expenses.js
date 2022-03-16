import { useSelector } from "react-redux";
import Basket from "./Basket";

function Expenses() {
  const basket = useSelector((state) => state.card.basket);
  const receiptMoney = useSelector((state) => state.card.receiptMoney);

  return (
    <>
      {basket.some((item) => item.amount > 0) && <div className="expenses">
        <h2>Sepet</h2>
        {basket.map((basketItem) => (
          <Basket
            key={basketItem.id}
            name={basketItem.name}
            amount={basketItem.amount}
            basketPrice={basketItem.price}
          />
        ))}
        <hr style={{ color: "black", width: "100%" }} />
        <b>
          Toplam <span className="green">${receiptMoney.toLocaleString()}</span>
        </b>
      </div>}
    </>
  );
}

export default Expenses;