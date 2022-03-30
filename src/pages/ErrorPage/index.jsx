import React from 'react';
import PropTypes from 'prop-types';
import './ErrorPage.css';

function ErrorPage({ errorName, errorCode }) {
  return (
    <div className="errorpage-text">
      Error
      {' '}
      {errorCode}
      !
      {' '}
      {errorName}
    </div>
  );
}
ErrorPage.propTypes = {
  errorName: PropTypes.string,
  errorCode: PropTypes.string,
};
ErrorPage.defaultProps = {
  errorName: 'Something Went Wrong!',
  errorCode: '',
};
export default ErrorPage;
