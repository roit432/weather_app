import React, { useEffect, useState } from 'react'
import Weather from './Weather';
import Location from './Location';

const UserWeather = () => {
    const [location, setLocation] = useState(true);
    const [coordinates, setCoordinates] = useState({
      lat: "",
      lon: ""
    });
    
    const API_KEY = process.env.REACT_APP_API_KEY;
    
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}&units=metric`;

    const getFromSessionStorage = () => {
      const localCoordinates = sessionStorage.getItem("user-coordinates");
      if(localCoordinates){
        const userCoordinates = JSON.parse(localCoordinates);
        setCoordinates(userCoordinates);
        setLocation(false);
      }      
    }

    useEffect(() => {
      getFromSessionStorage();
    }, []);

  return (
    <div>
      {
        location ? (<Location setCoordinates={setCoordinates} setLocation={setLocation} />) : (<Weather url={API_URL} />)
      }
    </div>
  )
}

export default UserWeather
