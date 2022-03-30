/* eslint-disable max-len */
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  HOME_ROUTE, RESTAURANTS_ROUTE, NOT_FOUND_ROUTE, BAD_REQUEST_ROUTE, SERVER_ERROR_ROUTE, SOMETHING_WENT_WRONG_ROUTE,
} from './constants/routes';
import {
  HomePage, RestaurantPage, NotFoundPage, ErrorPage,
} from './pages';
import { Header, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<HomePage />} />
          <Route path={`${RESTAURANTS_ROUTE}:id`} element={<RestaurantPage />} />
          <Route path={NOT_FOUND_ROUTE} element={<NotFoundPage />} />
          <Route path={BAD_REQUEST_ROUTE} element={<ErrorPage errorName="Bad Request!" errorCode="404" />} />
          <Route path={SERVER_ERROR_ROUTE} element={<ErrorPage errorName="Internal Server Error!" errorCode="500" />} />
          <Route path={SOMETHING_WENT_WRONG_ROUTE} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
