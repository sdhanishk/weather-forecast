import data from './sample-data';

function isDataAvailable() {

  if (data.cod !== "200") {
    return false;
  }

  return true;

}

function getLocationFromData() {

  if (!isDataAvailable()) {
    return {};
  }

  return {
    city: data.city.name,
    country: data.city.country
  }

}

function getParsedData() {

  let parsedData = {};

  if (!isDataAvailable()) {
    return parsedData;
  }

  let weatherData = {};

  for (let weatherEntry of data.list) {

    let date = weatherEntry.dt_txt.split(' ')[0];

    if (typeof weatherData[date] === 'undefined') {
      weatherData[date] = [];
    }

    weatherData[date].push(weatherEntry);

  }

  parsedData = {
    ...getLocationFromData(),
    weatherData
  };

  return parsedData;

}

function getFiveDaysForecastData() {

  const parsedData = getParsedData();
  const keys = Object.keys(parsedData.weatherData);

  let fiveDayForecastData = [];

  for (let index = 0; index < 5; index++) {
    fiveDayForecastData.push(parsedData.weatherData[keys[index]]);
  }

  return fiveDayForecastData;

}

export {
  getLocationFromData,
  getParsedData,
  getFiveDaysForecastData
};