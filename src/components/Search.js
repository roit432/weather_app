import React, { useState } from 'react'
import {ImSearch} from "react-icons/im"
import Weather from './Weather';

const Search = () => {
    const [city, setCity] = useState('');
    const API_KEY = process.env.REACT_APP_API_KEY;
    
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const [showWeather, setShowWeather] = useState(false);

    const handleChange = (event) => {
        setShowWeather(false);
        setCity(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowWeather(true);
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className='w-[100%] max-phone:flex-col max-phone:gap-y-2 flex gap-x-3 justify-between'>
        <input type="text"
            className='w-[100%] p-2 outline-none text-black font-bold placeholder:text-black bg-slate-100 border-none rounded-xl'
            placeholder='Search for city...'
            value={city}
            onChange={handleChange}
        />
        <button className=' w-fit flex items-center gap-x-3 mx-auto bg-black text-white hover:bg-[#3a3a3a] rounded-lg p-3'>
            <span className={`uppercase font-semibold hidden max-phone:text-[0.75rem] max-phone:block`}>Search</span><ImSearch />
        </button>
      </form>

      {showWeather && <Weather url={API_URL} />} 
    </div>
  )
}

export default Search
