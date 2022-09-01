import React, { useEffect, useState } from "react";
import WeatherForm from "../WeatherForm/WeatherForm";
import WeatherMainInfo from "../WeatherMainInfo/WeatherMainInfo";
import style from "./weatherApp.module.css"
import Loading from "../Loading/Loading";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [weatherAux, setWeatherAux] = useState(null);

  useEffect(() => {
    loadInfo()
  }, [])

  useEffect(() => {
    document.title = `El Clima | ${weather?.location.name ?? ""}`
  }, [weather])
  


  const loadInfo= async (city="City bell") =>{
    const endpoint  = `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
    try {
        const data = await fetch(endpoint).then(res=>res.json()).then(response=>response)
        if(data.error){
          alert("No se encontro ninguna ubicacion con ese nombre")
          setWeather(weatherAux)
        }else{
          setWeather(data)
          setWeatherAux(data)
        }
    } catch (error) {
        console.log(error.message)
    }
  } 
  const handleChangeCity = (city) => {
    setWeather(null)
    loadInfo(city)
  };
  return (
    <div className={style.weatherContainer} >
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather}/> : <Loading/>}
    </div>
  );
};

export default WeatherApp;
