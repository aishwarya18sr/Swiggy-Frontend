export const BACKEND_URL = 'http://localhost:8000';

export const getAllRestaurants = {
  method: 'get',
  url: '/restaurants/',
};
export const getMenusByRestaurant = (restaurantId) => ({
  method: 'get',
  url: `/restaurants/${restaurantId}/`,
});

export const getRestaurantsByDish = (dishName) => ({
  method: 'get',
  url: `/restaurants/search?dish=${dishName}`,
});
