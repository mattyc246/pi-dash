import axios from 'axios';
import { failedResponse, HTTP_STATUS_OK, successResponse } from './apiHelpers';

export const fetchWeatherData = async (lat, lon) => {
  if (!lat || !lon) return failedResponse();
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
    const response = await axios.get(url);

    if (response?.status === HTTP_STATUS_OK) {
      return successResponse({
        data: response?.data
      });
    } else {
      return failedResponse();
    }
  } catch (error) {
    console.log('Weather Error: ', error);
    return failedResponse();
  }
};
