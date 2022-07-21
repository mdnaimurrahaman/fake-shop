import React, { useEffect, useState } from 'react';
import './Purchase.css'
import { useParams } from "react-router-dom";
import {AiFillStar} from 'react-icons/ai'


const Purchase = () => {


const { id } = useParams();
const [product, setProduct] = useState({});

const {category, image, description, price, title } = product;
  // const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const url = ` https://fakestoreapi.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id, product]);

    return (
        <div className=' container detail-container'>
            <div className='row'>
                <div className="col-md-6 cal-sm-12">
                  <img src={image} alt={title} width="100%" />
                </div>
                <div className="col-md-6 cal-sm-12 p-4">
                  <p>{category}</p>
                  <h1 className='fw-bold'>{title}</h1>
                  <h4 className='detail__price'>$<span>{price}</span></h4>
                  <span><AiFillStar/></span>
                 <div className='my-4 size-quantity-add'>
                 <select>
                    <option>Select Size</option>
                    <option>XXL</option>
                    <option>XL</option>
                    <option>L</option>
                    <option>M</option>
                    <option>SM</option>
                  </select>
                   <input type="number" value="1" />
                   <a href='#' className='btn btn-primary'>Add To Cart</a>
                 </div>

                  <h3 className='fw-bold mb-4'>Product Details</h3>
                  <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Purchase;