import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const Purchase = () => {


const { id } = useParams();
const [product, setProduct] = useState({});

  // const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const url = ` https://fakestoreapi.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id, product]);

    return (
        <div>
            <h1> this is product: {product.id}</h1>
        </div>
    );
};

export default Purchase;