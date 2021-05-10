import './index.css';
import { getFiveDaysForecastData } from '../../data/data-parser';
import WeatherCard from '../weather-card';

function App() {

  const fiveDayForecastData = getFiveDaysForecastData();

  return (
    <div id="weather-cards-container">
      {
        fiveDayForecastData.map((forecast, index) => {
          return <WeatherCard key={index} forecast={forecast}/>;
        })
      }
    </div>
  );

}

export default App;
