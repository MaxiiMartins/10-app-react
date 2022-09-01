import React, { useState } from 'react'
import style from "./weatherForm.module.css"


const WeatherForm = ({onChangeCity}) => {
    const [city,setCity] = useState("")

    const handleChange = (e)=>{
        const value = e.target.value
        setCity(value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(city !== "") onChangeCity(city)
    }

  return (
    <form onSubmit={handleSubmit} className={style.container}>
        <input placeholder='Busca tu ciudad....' className={style.input} type="text" onChange={handleChange}  />
    </form>
  )
}

export default WeatherForm
