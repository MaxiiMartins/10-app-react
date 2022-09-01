import React from "react";
import style from "./weatherMainInfo.module.css"


const WeatherMainInfo = ({ weather }) => {
  return (
    <div className={style.mainInfo} >
      <div className={style.city}>{weather?.location.name}</div>
      <div className={style.country}>{weather?.location.country}</div>
      <div className={style.row}>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            width="120"
            alt={`${weather?.current.condition.text}`}
          />
        </div>
        <div className={style.WeatherConditions}>
        <div className={style.condition}>{weather?.current.condition.text}</div>
        <div className={style.current}>{weather?.current.temp_c} °</div>
        </div>
      </div>
      <iframe
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d210146.43838749157!2d${weather?.location.lon}88!3d${weather?.location.lat}255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1661988135517!5m2!1ses!2sar`}
        width="100%"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
      
    </div>
  );
};

export default WeatherMainInfo;
