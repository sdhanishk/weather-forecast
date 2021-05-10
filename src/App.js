import './App.css';
import { getLocationFromData } from './data/data-parser';
import { getStringFromObject } from './utils/index';

function App() {

  const locationString = getStringFromObject({
    object: getLocationFromData(),
    keyOrder: ['city', 'country'],
    separator: ', '
  });

  return (
    <div id="container">
      <div id="heading">
        <label id="heading-label">5-Day Forecast.</label>
      </div>
      <label id="location">{locationString}</label>
    </div>
  );

}

export default App;
