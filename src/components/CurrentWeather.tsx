import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrentWeather from "../services/CurrentWeather";

function CurrentWeatherForm() {
    const [typedCity, setTypedCity] = useState('');
    const [updateWeather, setupdateWeather] = useState(true);
    const searchedCity = useSelector((state: any) => state.searchCityReducer.city)

    const image = useSelector((state: any) => state.currentWeatherReducer.image);
    const weather = useSelector((state: any) => state.currentWeatherReducer.weather);
    const temp = useSelector((state: any) => state.currentWeatherReducer.temp);
    const wind = useSelector((state: any) => state.currentWeatherReducer.wind);

    const dispatch = useDispatch();

    const changeValue = (e: any) => {
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

    return(
        <form className="currentWeatherForm">

                <div className="currentWeatherForm-text">
                    {searchedCity}
                </div>

                <div className="currentWeatherForm-output">
                    {updateWeather ? <CurrentWeather city={searchedCity}></CurrentWeather> : null}
                    <div className="currentWeatherForm-outputImage"><img alt="sorry :(" src={image}></img></div>
                    <div className="currentWeatherForm-outputWeather">Sky: {weather}</div>
                    <div className="currentWeatherForm-outputTemp">Temperature is {temp} C</div>
                    <div className="currentWeatherForm-outputWind">Wind: {wind} m/s</div>
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