import React, { useEffect, useState } from 'react';
import './Purchase.css'
import { useParams } from "react-router-dom";
import {AiFillStar} from 'react-icons/ai'
import {AiOutlinePicLeft} from 'react-icons/ai'
import {IoMdCart} from 'react-icons/io'


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
            <div className='row detail-container align-items-center'>
                <div className="col-md-6 cal-sm-12">
                  <div className='image'>
                    <img src={image} alt={title}/>
                  </div>
                </div>
                <div className="col-md-6 cal-sm-12 p-4">
                  <p>{category}</p>
                  <h1 className='fw-bold'>{title}</h1>
                  <h4 className='detail__price'>$<span>{price}</span></h4>
                 <div className='my-4 size-quantity-add'>
                 <div className='d-flex'>
                  <select>
                     <option>Select Size</option>
                     <option>XXL</option>
                     <option>XL</option>
                     <option>L</option>
                     <option>M</option>
                     <option>SM</option>
                   </select>
                    <input className='ms-3' type="number" value="1" />
                 </div>
                   <a href='#' className='btn btn-primary'>Add To Cart <IoMdCart className='ms-2'/></a>
                 </div>

                  <h3 className='fw-bold mb-4'>Product Details <AiOutlinePicLeft className='icon'/></h3>
                  <p className='mb-4'>{description}</p>
                  {/* <span>Rate:<AiFillStar className='icon'/></span>
                  <span className='ms-4'>Count:</span> */}
                </div>
            </div>
        </div>

    );
};

export default Purchase;