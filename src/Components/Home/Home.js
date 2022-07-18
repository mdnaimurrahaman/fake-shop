import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Categories from "../Categories/Categories";
import SideCard from "../SideCard/SideCard";
import Slider from "../SideCard/Slider";
import '../SideCard/SideCard.css'

const Home = () => {
  return (
    <div className="container cta-slider d-flex justify-content-between mt-4">
          
            <Categories />
            <Slider />
         
    </div>
  );
};

export default Home;
