import { useSelector } from "react-redux";

function Header() {
  const money = useSelector((state) => state.card.money);
  return (
    <>
      <h1 className="text-center">Para Harcama Uygulaması</h1>
      <h2 className="money">
        {money > 0 ? `Şuan $${money.toLocaleString()} paran var.` : "Harcayacak paran kalmadı."}
      </h2>
    </>
  );
}

export default Header;