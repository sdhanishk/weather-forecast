import env from "react-dotenv";

import staticData from './data/sample-data';
import axios from 'axios';

import './App.css';
import { getLocationFromData } from './data/data-parser';
import { getStringFromObject } from './utils/index';
import WeatherCards from './components/weather-cards';
import { useEffect, useState } from "react";

async function getData() {

  let data = staticData;

  if (env.STATIC === "false") {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=Bangalore&APPID=${env.OPEN_WEATHER_API_KEY}`);
    data = response.data;
  }

  return data;

}

function renderApp(data) {

  const locationString = getStringFromObject({
    object: getLocationFromData(data),
    keyOrder: ['city', 'country'],
    separator: ', '
  });

  return (
    <div id="container">
      <div id="heading">
        <label id="heading-label">5-Day Forecast.</label>
      </div>
      <label id="location">{locationString}</label>
      <div>
        <WeatherCards data={data}/>
      </div>
    </div>
  );

}

function App() {

  const [weatherApiData, setWeatherApiData] = useState(null);

  useEffect(async () => {
    const weatherData = await getData();
    setWeatherApiData(weatherData);
  }, []);

  return weatherApiData === null ? <></> : renderApp(weatherApiData);

}

export default App;
