/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './AllCards.css';

function AllCards({ restaurantData, cardClickHandler }) {
  if (restaurantData.length > 0) {
    return (
      <div className="allcards-container">
        {(restaurantData.map((eachRestaurantData) => (<Card key={eachRestaurantData.id} id={eachRestaurantData.id} name={eachRestaurantData.name} location={eachRestaurantData.location} costForTwo={eachRestaurantData.costForTwo} onClickHandler={cardClickHandler} />)))}
      </div>
    );
  }

  return <p className="allcards-text">No Restaurants with given dish is available</p>;
}

AllCards.propTypes = {
  restaurantData: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      costForTwo: PropTypes.number.isRequired,
    },
  )).isRequired,
  cardClickHandler: PropTypes.func.isRequired,
};

export default AllCards;
