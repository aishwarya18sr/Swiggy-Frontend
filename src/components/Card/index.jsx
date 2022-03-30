import './Card.css';
import React from 'react';
import PropTypes from 'prop-types';
import RestaurantA from '../../assets/images/RestaurantA.jpg';
import RestaurantB from '../../assets/images/RestaurantB.jpg';
import RestaurantC from '../../assets/images/RestaurantC.png';
import RestaurantD from '../../assets/images/RestaurantD.jpg';

function Card({
  id, name, location, costForTwo, onClickHandler,
}) {
  let image;
  if (name === 'Restaurant A') {
    image = RestaurantA;
  } else if (name === 'Restaurant B') {
    image = RestaurantB;
  } else if (name === 'Restaurant C') {
    image = RestaurantC;
  } else if (name === 'Restaurant D') {
    image = RestaurantD;
  }
  const onButtonClickHandler = () => {
    onClickHandler(id);
  };
  return (
    <button type="button" className="card-button" onClick={onButtonClickHandler}>
      <div className="card-container">
        <img className="card-image" src={image} alt="restaurantImage" />
        <div className="card-content">
          <div className="card-text">
            <p className="restaurant-name">{name}</p>
            <p className="restaurant-location">{location}</p>
            <p className="restaurant-costForTwo">{costForTwo}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  costForTwo: PropTypes.number.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Card;
