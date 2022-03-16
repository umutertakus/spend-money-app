function Basket({ name, amount, basketPrice }) {
  return (
    <>
      {amount > 0 && (
        <div className="a-expenses">
          <p>
            <b>{name}</b> x {amount}
            <span style={{ paddingLeft: "19px" }} className="green">
              ${basketPrice.toLocaleString()}
            </span>
          </p>
        </div>
      )}
    </>
  );
}

export default Basket;