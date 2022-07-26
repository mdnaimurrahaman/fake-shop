import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Categories from "../Categories/Categories";
import SideCard from "../SideCard/SideCard";
import Slider from "../SideCard/Slider";
import '../SideCard/SideCard.css'
import Products from "../Products/Products";
import Banner from "../Banner/Banner";
import Review from "../Reviews/Review";
import Footer from "../Shared/Footer";

const Home = ({reviews}) => {
  return (
    <div>
      <div className="container top-banner cta-slider justify-content-between mt-4">
            
              <Categories />
              <Slider />
           
      </div>
      <Products/>
      <Banner/>
      <Review reviews={reviews}/>
      <Footer/>
    </div>
  );
};

export default Home;
