/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AllCards, Search } from '../../components';
import { getAllRestaurants, getRestaurantsByDish } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest';
import { RESTAURANTS_ROUTE } from '../../constants/routes';
import './HomePage.css';

function HomePage() {
  const [restaurantData, setRestaurantData] = useState([]);
  // const [isRestaurantDataLoaded, setIsRestaurantDataLoaded] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    makeRequest(getAllRestaurants).then((response) => {
      setRestaurantData(response);
    });
  }, []);
  const uniqueDishNames = new Set();
  const searchClickHandler = (dishName) => {
    makeRequest(getRestaurantsByDish(dishName)).then((response) => {
      let formattedResponse = response.map((eachResponse) => {
        console.log(...eachResponse.Restaurants);
        return eachResponse.Restaurants;
      });
      formattedResponse = formattedResponse.reduce((acc, eachResponse) => {
        if (!uniqueDishNames.has(eachResponse.name)) {
          uniqueDishNames.add(eachResponse.name);
          acc.push(...eachResponse);
        }
        return acc;
      }, []);
      setRestaurantData(formattedResponse);
    });
  };
  const cardClickHandler = (restaurantId) => {
    navigate(`${RESTAURANTS_ROUTE}${restaurantId}/`);
  };
  if (restaurantData) {
    return (
      <div className="home-container">
        <Search onSearchHandler={searchClickHandler} />
        <div className="root-container">
          <AllCards restaurantData={restaurantData} cardClickHandler={cardClickHandler} />
        </div>
      </div>
    );
  }
  return <p />;
}
export default HomePage;
