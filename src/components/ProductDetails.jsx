import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const retrieveProducts = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`
  );

  console.log(response);
  return response.data;
};

const ProductDetails = ({ id }) => {
  console.log(id);
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: retrieveProducts,
  });

  console.log(product);
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div> An error accured:{error.message}</div>;

  console.log(product);
  return (
    <div className="w-/15">
      <div>
        <p>{product?.title}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
