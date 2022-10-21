import axios from 'axios';
import { HTTP_STATUS_OK, failedResponse, successResponse } from './apiHelpers';

export const fetchCurrencyPrices = async (currencies) => {
  try {
    const url = `https://api.coincap.io/v2/assets?ids=${currencies}`;
    const response = await axios.get(url);

    if (response?.status === HTTP_STATUS_OK) {
      return successResponse({
        data: response?.data?.data
      });
    } else {
      return failedResponse();
    }
  } catch (error) {
    console.log('Error: ', error);
    return failedResponse();
  }
};
