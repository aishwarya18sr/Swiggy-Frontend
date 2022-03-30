/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import './Search.css';

function Search({ onSearchHandler }) {
  const [dishName, setDishName] = useState('');
  const onChangeHandler = (event) => {
    setDishName(event.target.value);
  };
  const onClickHandler = () => {
    onSearchHandler(dishName);
    setDishName('');
  };
  return (
    <div className="search-container">
      <input className="search-input" type="text" placeholder="Search.." name="search" onChange={onChangeHandler} />
      <button className="search-button" type="submit" onClick={onClickHandler}><FaSearch /></button>
    </div>
  );
}

Search.propTypes = {
  onSearchHandler: PropTypes.func.isRequired,
};

export default Search;
