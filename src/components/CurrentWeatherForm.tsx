import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrentWeather from "../services/CurrentWeather";
import ICurrentWeather from "../interfaces/ICurrentWeather";

const CurrentWeatherForm = () => {
    const [typedCity, setTypedCity] = useState<string>('');
    const [updateWeather, setupdateWeather] = useState<boolean>(true);
    const searchedCity: string = useSelector((state: any) => state.searchCityReducer.city)

    const currentWeather: ICurrentWeather = useSelector((state: any) => state.currentWeatherReducer);

    const dispatch: Function = useDispatch();

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setupdateWeather(false)
        setTypedCity(city => city = e.target.value)
    }

    const searchCity = () => {
        dispatch({
            type: 'CHANGE_CITY',
            payload: {
                city: typedCity
            }
        })
        setupdateWeather(true)
    }

    useEffect(() => {
        setupdateWeather(false)
    }, []);

    return (
        <form className="currentWeatherForm">

            <div className="currentWeatherForm-text">
                {searchedCity}
            </div>

            <div className="currentWeatherForm-output">
                {updateWeather ? <CurrentWeather city={searchedCity}></CurrentWeather> : null}
                <div className="currentWeatherForm-outputImage"><img alt="sorry :(" src={currentWeather.image}></img></div>
                <div className="currentWeatherForm-outputWeather">Sky: {currentWeather.weather}</div>
                <div className="currentWeatherForm-outputTemp">Temperature is {currentWeather.temp} C</div>
                <div className="currentWeatherForm-outputWind">Wind: {currentWeather.wind} m/s</div>
            </div>

            <div className="currentWeatherForm-input">
                <input className="currentWeatherForm-inputBlock" value={typedCity}
                    onChange={(e) => changeValue(e)}></input>
                <input type="button" value={"Search"} className="currentWeatherForm-inputButton"
                    onClick={() => searchCity()}></input>
            </div>
        </form>
    )
}

export default CurrentWeatherForm;