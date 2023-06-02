import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const ForecastWeather = (props: any) => {
    const dispatch = useDispatch();
    const lat = useSelector((state: any) => state.forecastWeatherReducer.lat)
    const lon = useSelector((state: any) => state.forecastWeatherReducer.lon)

    useEffect(() => {
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
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=34cf18d958a5bebc2a3aaa0cf4eccbf6`)
            .then((response) => {
                console.log(response.data)
                dispatch({
                    type: 'CHANGE_FORECAST',
                    payload: {
                        forecast: [
                            { date: response.data.list[0].dt_txt, weather: response.data.list[0].weather[0].main, temp: response.data.list[0].main.temp, img: response.data.list[0].weather[0].icon },
                            { date: response.data.list[8].dt_txt, weather: response.data.list[8].weather[0].main, temp: response.data.list[8].main.temp, img: response.data.list[8].weather[0].icon },
                            { date: response.data.list[16].dt_txt, weather: response.data.list[16].weather[0].main, temp: response.data.list[16].main.temp, img: response.data.list[16].weather[0].icon },
                            { date: response.data.list[24].dt_txt, weather: response.data.list[24].weather[0].main, temp: response.data.list[24].main.temp, img: response.data.list[24].weather[0].icon },
                            { date: response.data.list[32].dt_txt, weather: response.data.list[32].weather[0].main, temp: response.data.list[32].main.temp, img: response.data.list[32].weather[0].icon }
                        ]
                    }
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    })

    return null;
}

export default ForecastWeather;