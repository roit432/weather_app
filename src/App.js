import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import UserWeather from './components/UserWeather';

function App() {
  const [yourWeather, setYourWeather] = useState(true);
  const handleClick1 = () => {
    setYourWeather(true);
  }
  
  const handleClick2 = () => {
    setYourWeather(false);
  }
  return (
    <div className='min-h-[100vh] h-[auto] w-[100vw] flex justify-center bg-[#fff] '>
      <div className=' py-10 w-[40%] max-tablet:w-[80%] max-phone:w-[90%] flex flex-col gap-y-10 text-center ' >
        <h1 className=' text-3xl uppercase font-bold text-black'>Weather App</h1>
        <div className='flex max-phone:flex-col max-phone:gap-y-3  justify-between items-center text-slate-200 font-bold uppercase'>
          <div onClick={handleClick1} className={ `${yourWeather ? 'px-2 py-1 rounded-md bg-slate-200 cursor-pointer' : 'cursor-pointer'} text-black max-phone:text-[1rem]` }>Your Weather</div>
          <div onClick={handleClick2} className={ `${yourWeather ? (`cursor-pointer`) : (`px-2 py-1 rounded-md  bg-slate-200 cursor-pointer`)} text-black max-phone:text-[1rem]` }>Search Weather</div>
        </div>

        <div>

          {
            yourWeather ? (<UserWeather  />) : (<Search />)
          }

        </div>
      </div>
    </div>
  );
}

export default App;
