import React from "react";
import { Carousel } from "react-bootstrap";
import "./PortfolioCard.css";
import BettingApp from "./Projects/BettingApp";
import Calculator from "./Projects/Calculator";
import Dictionary from "./Projects/Dictionary";
import FormDesign from "./Projects/FormDesign";
import FormValidation from "./Projects/FormValidation";
import IDCard from "./Projects/IDCard";
import MultiplicationTable from "./Projects/MultiplicationTable";
import ProfilePage from "./Projects/ProfilePage";
import RealEstateAgent from "./Projects/RealEstateAgent";
import WeatherApp from "./Projects/WeatherApp";

const PortfolioCard = () => {
  return (
    <>
      <Carousel controls={false}>
        <Carousel.Item>
          <BettingApp />
        </Carousel.Item>

        <Carousel.Item>
          <Calculator />
        </Carousel.Item>

        <Carousel.Item>
          <Dictionary />
        </Carousel.Item>

        <Carousel.Item>
          <FormDesign />
        </Carousel.Item>

        <Carousel.Item>
          <FormValidation />
        </Carousel.Item>

        <Carousel.Item>
          <IDCard />
        </Carousel.Item>

        <Carousel.Item>
          <MultiplicationTable />
        </Carousel.Item>

        <Carousel.Item>
          <ProfilePage />
        </Carousel.Item>

        <Carousel.Item>
          <RealEstateAgent />
        </Carousel.Item>

        <Carousel.Item>
          <WeatherApp />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default PortfolioCard;
