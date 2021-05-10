import './index.css';

import moment from 'moment';
import { useState } from 'react';

function getDateByFormat(timestamp, format) {

  return moment.unix(timestamp).format(format);

}

function renderWeatherIcon(icon) {

  return <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=''></img>

}

function renderCelcius(temperature) {

  return <label className="bold-and-bright">{(temperature-273.15).toFixed(2)} °C</label>

}

function renderWeatherDescription(description) {

  return <label className="normal-and-light">{description}</label>

}

function App(props) {

  const { forecast } = props;

  const icon = forecast[0].weather[0].icon;
  const temperature = forecast[0].main.temp;
  const description = forecast[0].weather[0].description;

  return (
    <div className="weather-card">
      <label className="bold-and-bright">{getDateByFormat(forecast[0].dt, 'dddd')}</label>
      <label className="normal-and-light">{getDateByFormat(forecast[0].dt, 'MMMM Do, h:mm a')}</label>
      {renderWeatherIcon(icon)}
      {renderCelcius(temperature)}
      {renderWeatherDescription(description)}
    </div>
  );

}

export default App;
