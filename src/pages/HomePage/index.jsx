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
  const navigate = useNavigate();
  useEffect(() => {
    makeRequest(getAllRestaurants).then((response) => {
      setRestaurantData(response);
    });
  }, []);
  const searchClickHandler = (dishName) => {
    makeRequest(getRestaurantsByDish(dishName)).then((response) => {
      if (!response) {
        setRestaurantData([]);
        return;
      }
      const formattedResponse = response.map((eachResponse) => eachResponse.Restaurants);
      const restaurants = new Set();
      formattedResponse.forEach((eachResponse) => {
        if (eachResponse.length === 1) {
          restaurants.add(eachResponse[0]);
        } else {
          eachResponse.forEach((restaurant) => {
            restaurants.add(restaurant);
          });
        }
      });
      const formattedRestaurants = Array.from(restaurants);
      setRestaurantData(formattedRestaurants);
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
