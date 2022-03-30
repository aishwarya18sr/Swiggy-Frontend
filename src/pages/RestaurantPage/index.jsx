import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMenusByRestaurant } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest';
import './RestaurantPage.css';

function RestaurantPage() {
  const { id } = useParams();
  const restaurantId = parseInt(id, 10);
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    makeRequest(getMenusByRestaurant(restaurantId)).then((response) => {
      setMenuData(response.Dishes);
    });
  }, []);
  const getMenu = () => menuData.map((eachMenuData) => (
    <tr key={eachMenuData.id}>
      <td>{eachMenuData.name}</td>
      <td>{eachMenuData.price}</td>
      <td>{eachMenuData.rating}</td>
    </tr>
  ));
  if (menuData) {
    return (
      <table className="restaurant-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {getMenu()}
        </tbody>
      </table>
    );
  }
  return <p />;
}

export default RestaurantPage;
