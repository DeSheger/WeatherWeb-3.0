import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react';
import axios from "axios";

const CurrentWeather = (props:any) => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=34cf18d958a5bebc2a3aaa0cf4eccbf6&units=metric`)
        .then((response)=>{
            dispatch({type:'CHANGE_WEATHER',
            payload: {
                image:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
                weather: response.data.weather[0].main,
                temp: response.data.main.temp,
                wind: response.data.wind.speed
            }
        })
        })
    })

    return null
}

export default CurrentWeather;