import React from "react";
import { useContext, useState } from 'react';

const AddCityButton = (props) => {
    const context = useContext(WeatherContext);
    const [name, setName] = useState('');

    const submit = () => {
        context.addcity(name, Math.ceil(Math.random() * 10));
        setName('');
    };

    // const submit = () => {
    //     const unit = 'imperial';
    //     const mode = 'json';
    //     const encodedName = encodeURIComponent(name);
    //     fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&mode=${mode}&q=${encodedName}`, {
    //       "method": "GET",
    //       "headers": {
    //         "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    //         "x-rapidapi-key": /* Use your RapidAPI key here */
    //       }
    //     })
    //       .then(response => {
    //         console.log(response);
    //         if (response.status !== 200) throw new Error();
    //         return response.json();
    //       }).then(json => {
    //         console.log(json);
    //         context.addCity(name, json.main.temp);
    //         setName('');
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    //   };

    return(
        <div className="add-city-form">
            <input className="input" value={name} onChange = {(e) => 
            setName(e.target.value)}/>
            <button className="input" onClick={submit}>Add</button>
        </div>
    );
};

export default AddCityButton