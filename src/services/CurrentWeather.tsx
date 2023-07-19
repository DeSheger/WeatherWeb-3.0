import { useDispatch } from 'react-redux';
import {useEffect} from 'react';
import axios from "axios";

const CurrentWeather = (props:any) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("currentWeather Request")
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${props.city}&limit=1&appid=34cf18d958a5bebc2a3aaa0cf4eccbf6`)
            .then((response) => {
                dispatch({
                    type: 'CHANGE_CORDS',
                    payload: {
                        lat: response.data[0].lat,
                        lon: response.data[0].lon
                    }
                })
            })
            .catch(function (error) {
                console.log(error)
            })
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
        .catch(function (error) {
            dispatch({type:'CHANGE_WEATHER',
            payload: {
                image: ``,
                weather: `sorry :(`,
                temp:`sorry :(`,
                wind: `sorry :(`
            }});

            dispatch({
                type: 'CHANGE_CITY',
                payload: {
                    city: "no found"
                }
            })
            console.log(error);
          })
    })

    return null
}

export default CurrentWeather;