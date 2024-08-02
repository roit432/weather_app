import React from 'react';
import location from "../assets/locationBW.png";
import Toast from "react-hot-toast";

const Location = (props) => {
    const {setCoordinates, setLocation} = props;

    function showPosition(position){
        const userCoordinates = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
        };

        setCoordinates(userCoordinates);
        setLocation(false);
        Toast.success("Location fetched successfully");
    
        sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    }

    const clickHandler = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        else{
            Toast.error("Location can't be fetched");
        }
    }

  return (
    <div className='flex flex-col items-center gap-4'>
      <div>
        <img src={location} className='' height={180} width={180} alt="" />
      </div>

      <div className='text-black flex flex-col gap-y-1'>
        <p className='font-bold max-phone:text-[1.5rem] text-4xl'>Grant Location Access</p>
        <p className='font-bold max-phone:text-[0.75rem] text-lg'>Allow Access to get Weather Information</p>
      </div>

      <button onClick={clickHandler} className='uppercase bg-black text-white p-3 font-bold rounded-lg hover:bg-[#3a3a3a] hover:scale-[1.05] transition-all duration-300 ease-linear'>Grant Access</button>
    </div>
  )
}

export default Location
