import "./App.css";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <div className="App">
        <ProductList />
        <ProductForm />
        <Cart />
      </div>
    </>
  );
}

export default App;
