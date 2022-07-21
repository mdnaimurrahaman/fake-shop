import React from "react";
import { useNavigate } from "react-router-dom";
import './Product.css'

const Product = ({ product }) => {
  const { id, category, image, description, price, rating, title } = product;
  const navigate = useNavigate();
  const navigateToItemDetail = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    // <div className=" product col-md-3 col-lg-3 col-sm-12 mb-4">
    //   <div class="card h-100 p-4">
    //     <img src={image} class="card-img-top" height="250px" alt={title}/>
    //     <div class="card-body">
    //       <h5 class="card-title mb-0">{title.substring(0,12)}</h5>
    //       {/* <p class="card-text">{description}</p> */}
    //       <h3>${price}</h3>
    //       <a href="#" class="btn btn-primary">
    //         Go somewhere
    //       </a>
    //     </div>
    //   </div>
    // </div>


    <>
    <div class="col-md-3 col-sm-6 mb-4">
        <div class="product-grid h-100 p-3">
            <div class="product-image">
                <a href="#" class="image">
                    <img class="pic-1" src={image}alt={title}/>
                </a>
                <span class="product-sale-label">50% off</span>
                <ul class="product-links">
                    <li><a href="#"><i class="fa fa-shopping-bag"></i> Add to cart</a></li>
                    <li onClick={() => navigateToItemDetail(id)}><a href="#"><i class="fa fa-search"></i>More Details</a></li>
                </ul>
            </div>
            <div class="product-content">
                <h3 class="title fw-bold"><a href="#">{title.substring(0,12)}</a></h3>
                <div class="price"><span>${price-price*50/100}</span>${price}</div>
            </div>
        </div>
    </div>
    </>

  );
};

export default Product;
