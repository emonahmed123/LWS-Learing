import { useState } from "react";
import "./App.css";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./components/ProductDetails";
import ProductsList from "./components/ProductsList";

function App() {
  const [id, setId] = useState(1);

  const hadleId = (params) => {
    setId(params);
  };

  return (
    <>
      <div>
        <div className="flex">
          <AddProduct></AddProduct>
          <h1>API Request with Axios</h1>
          <ProductsList onhadle={hadleId} />
          <ProductDetails id={id} />
        </div>
      </div>
    </>
  );
}

export default App;
