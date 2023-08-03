import { useSelector } from "react-redux";

function App() {
  const products = useSelector((store: any) => store.products);
  console.log(products);
  return <div className="App">App</div>;
}

export default App;
