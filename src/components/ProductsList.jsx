import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const retrieveProducts = async ({ queryKey }) => {
  const response = await axios.get(`http://localhost:3000/${queryKey[0]}`);

  console.log(response);
  return response.data;
};
const ProductsList = ({ onhadle }) => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: retrieveProducts,
  });

  console.log(products);
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div> An error accured:{error.message}</div>;

  return (
    <div className="flex flex-col  justify-center items-center w-3/5">
      <h1 className="text-3xl my-2">Product List</h1>
      <ul className="flex flex-wrap justify-center items-center">
        {products &&
          products.map((product) => {
            return (
              <li
                onClick={() => onhadle(product.id)}
                key={product.id}
                className="flex flex-col m-2 border rounded-sm "
              >
                <p className="text-xl my-3 text-center"> {product?.title}</p>

                <img src={product?.thumbnail} alt="" />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ProductsList;
