import React, { useEffect, useState } from 'react';
import wind from "../assets/wind.png";
import humidity from "../assets/humidity.png";
import clouds from "../assets/clouds.png";
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';
import Toast from "react-hot-toast";

const Weather = (props) => {
    const API_URL = props.url;
    const [loading, setLoading] = useState(true);
    const [dataFound, setDataFound] = useState(false);
    const [weatherInfo, setWeatherInfo] = useState({
        cityName: "",
        countryIcon: "",
        description: "",
        weatherIcon: "",
        temperature: "",
        windspeed: "",
        humidity: "",
        clouds: "",
    });

    const fetchWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}`);
            const data = await response.json();

            if(data.cod === '404'){
                setLoading(false);
                setDataFound(false);
                Toast.error("404 Data not found");
            }
            else {
                setLoading(false);
                setDataFound(true);
                setWeatherInfo({
                    ...weatherInfo,
                    cityName: data?.name,
                    countryIcon: data?.sys?.country,
                    description: data?.weather[0]?.description,
                    weatherIcon: data?.weather[0]?.icon,
                    temperature: data?.main.temp,
                    windspeed: data?.wind?.speed,
                    humidity: data?.main?.humidity,
                    clouds: data?.clouds?.all
                });
                Toast.success("Weather fetched successfully");
            }
        } catch (error) {
            setLoading(false);
            Toast.error("Error Fetching data");
        }
    }
    useEffect(() => {
        fetchWeatherInfo();
       // eslint-disable-next-line 
    }, []);

  return (
    <div>
      {
        loading ? (<Loader />) : (dataFound ? (
            <div className=' my-8 flex flex-col gap-y-5'>
            <div className='flex gap-x-4 items-center justify-center'>
                <h1 className=' text-5xl max-phone:text-[2rem] font-bold text-black'>{weatherInfo.cityName}</h1>
                <img className='max-phone:h-8 max-phone:w-10' src={`https://flagcdn.com/56x42/${weatherInfo.countryIcon.toLowerCase()}.png`} alt="country" />
            </div>
            <div className='flex items-center justify-center'>
                <p className=' text-black capitalize font-bold'>{weatherInfo.description}</p>
                <img src={`http://openweathermap.org/img/w/${weatherInfo.weatherIcon}.png`} alt="weather icon" />   
            </div>
            <p className=' text-4xl max-phone:text-[2rem] text-black font-extrabold'>{weatherInfo.temperature} °C</p>

            <div className='flex justify-center max-phone:flex-col  items-center gap-5'>
                <div className='flex flex-col p-2 rounded-lg max-phone:w-[90%] max-phone:h-[200px] w-[10em] h-[10em] justify-center items-center gap-y-1 bg-slate-100 '>
                    <img src={wind} alt="" height="50px" width="50px" />
                    <p className='text-black font-bold'>Windspeed</p>
                    <p className='text-black font-bold'>{weatherInfo.windspeed} m/s</p>
                </div>
                <div className='flex flex-col p-2 rounded-lg max-phone:w-[90%] max-phone:h-[200px] w-[10em] h-[10em] justify-center items-center gap-y-1 bg-slate-100 '>
                    <img src={humidity} alt="" height="50px" width="50px" />
                    <p className='text-black font-bold'>Humidity</p>
                    <p className='text-black font-bold'>{weatherInfo.humidity}%</p>
                </div>
                <div className='flex flex-col p-2 rounded-lg max-phone:w-[90%] max-phone:h-[200px] w-[10em] h-[10em] justify-center items-center gap-y-1 bg-slate-100 '>
                    <img src={clouds} alt="" height="50px" width="50px" />
                    <p className='text-black font-bold'>Clouds</p>
                    <p className='text-black font-bold'>{weatherInfo.clouds}</p>
                </div>
            </div>
        </div>) : <ErrorComponent />

        )
        
      }
    </div>
  );
}

export default Weather
