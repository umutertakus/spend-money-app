import "./App.css";
import CardList from "./components/CardList";
import Expenses from "./components/Expenses";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Header />
      <CardList />
      <Expenses />
      <Navbar />
    </>
  );
}

export default App;
