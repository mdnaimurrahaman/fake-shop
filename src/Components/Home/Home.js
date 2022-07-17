import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Categories from "../Categories/Categories";
import SideCard from "../SideCard/SideCard";

const Home = () => {
  return (
    <div className="container d-flex justify-content-between">
          <Categories />
          <SideCard />
    </div>
  );
};

export default Home;
