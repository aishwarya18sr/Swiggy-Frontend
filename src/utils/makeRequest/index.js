import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndpoints';
import { BAD_REQUEST_ROUTE, SERVER_ERROR_ROUTE, SOMETHING_WENT_WRONG_ROUTE } from '../../constants/routes';

const makeRequest = async (apiEndpoint, dynamicConfig = {}, navigateTo = () => {}) => {
  try {
    const response = await axios({
      ...apiEndpoint,
      url: `${BACKEND_URL}${apiEndpoint.url}`,
      ...dynamicConfig,
    });
    return response.data;
  } catch (err) {
    switch (err.response?.status) {
      case 400: navigateTo({ BAD_REQUEST_ROUTE });
        break;
      case 500: navigateTo({ SERVER_ERROR_ROUTE });
        break;
      default: navigateTo({ SOMETHING_WENT_WRONG_ROUTE });
    }
  }
  return [];
};
export default makeRequest;
