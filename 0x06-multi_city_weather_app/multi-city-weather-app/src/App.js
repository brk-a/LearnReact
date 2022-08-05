import React from 'react';
// import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {createContext, useState } from 'react';
// import CityList from './CityList';
// import AddCityButton from './AddCityButton';
// import TemperatureAverage from './TemperatureAverage';


const WeatherContext = createContext({
  cities: [],
  addCity: (name, temperature) => {}
});

// const [cities, setCities] = useState([]);

// const addCity = (name, temperature) => {
//   const newCity = {name, temperature};
//   setCities(prevCities => [...prevCities, {name, temperature}]);
// };

const CityList = (props) => {
  const context = useContext(WeatherContext);

  return (
    <table className="city-list">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
        </tr>
      </thead>
      <tbody>
        {context.cities.map((city, i) => (
          <tr key={city.name}>
            <td>{city.name}</td>
            <td>{city.temperature}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TemperatureAverage = (props) => {
  const context = useContext(WeatherContext);

  if (context.cities.length === 0) {
    return (
      <div>Add some cities to view their average temperatures.</div>
    );
  }

  let total = 0;
  for (const city of context.cities) {
    total += city.temperature;
  }
  const avg = total / context.cities.length;

  return (
    <div>
      The average is <b>{avg.toFixed(2)}</b> degrees Fahrenheit.
    </div>
  );
};

const AddCityButton = (props) => {
  const context = useContext(WeatherContext);

  const [name, setName] = useState('');

  const submit = () => {
    context.addCity(name, Math.ceil(Math.random() * 10));
    setName('');
  };

  return (
    <div className="add-city-form">
      <input className="input" value={name} onChange={(e) => setName(e.target.value)} />
      <button className="input" onClick={submit}>Add</button>
    </div>
  );
};

function App() {
  const [cities, setCities] = React.useState([]);

  const addCity = (name, temperature) => {
    const newCity = { name, temperature };
    setCities(prevCities => [...prevCities, { name, temperature }]);
  };

  return (
    <WeatherContext.Provider value={{
      cities,
      addCity,
    }}>
      <div className="city-overview">
        <h2>Multi-City Weather App</h2>
        <CityList />
        <AddCityButton />
        <TemperatureAverage />
      </div>
    </WeatherContext.Provider>
  );
}

// class App extends Component {
//   // const [cities, setCities] = useState([]);
//   // const addCity = (name, temperature) => {
//   //   const newCity = {name, temperature};
//   //   setCities(prevCities => [...prevCities, {name, temperature}]);
//   // };

//   render(){
//     return(
//     <WeatherContext.Provider value={{
//       cities,
//       addCity
//     }}>
//       <div className='city-overview'>
//         <h2>Multi-City Weather</h2>
//         <CityList/>
//         <AddCityButton/>
//         <TemperatureAverage/>
//       </div>
//     </WeatherContext.Provider>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
