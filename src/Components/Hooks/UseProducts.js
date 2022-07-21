import { useEffect, useState } from "react";

const UseProducts = () => {
  const [products, setProducts] = useState([]);
  console.log(products)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", {
      method: "GET",
    //   headers: {
    //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //   },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};

export default UseProducts;
