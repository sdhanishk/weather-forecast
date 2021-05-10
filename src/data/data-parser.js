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

  console.log(data);

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

export {
  getLocationFromData,
  getParsedData
};