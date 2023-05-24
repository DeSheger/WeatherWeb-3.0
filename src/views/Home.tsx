import { useEffect, useState } from "react";
import Typewriter from "../tools/Typewriter";
import CurrentWeather from "../services/CurrentWeather";
import { useDispatch, useSelector } from 'react-redux';

function Home() {
    const [city, setCity] = useState('');
    const searchedCity = useSelector((state: any) => state.searchCityReducer.city)

    const image = useSelector((state: any) => state.currentWeatherReducer.image);
    const weather = useSelector((state: any) => state.currentWeatherReducer.weather);
    const temp = useSelector((state: any) => state.currentWeatherReducer.temp);
    const wind = useSelector((state: any) => state.currentWeatherReducer.wind);

    const dispatch = useDispatch();

    const [click, setClick] = useState(true);

    
    const changeValue = (e: any) => {
        setClick(false)
        setCity(city => city = e.target.value)
    }

    const searchCity = (e: any) => {
        dispatch({
            type: 'CHANGE_CITY',
            payload: {
                city: city
            }
        })
        setClick(true)
    }
    

    return (
        <div className="home">
            <div className="home__main"></div>
            <form className="home__form">

                <div className="home__form-text">
                    {searchedCity}
                </div>

                <div className="home__form-output">
                    {click ? <CurrentWeather city={searchedCity}></CurrentWeather> : null}
                    <div className="home__form-outputImage"><img alt="sorry :(" src={image}></img></div>
                    <div className="home__form-outputWeather">{weather}</div>
                    <div className="home__form-outputTemp">{temp}</div>
                    <div className="home__form-outputWind">{wind}</div>
                </div>

                <div className="home__form-input">
                    <input className="home__form-inputBlock" value={city}
                        onChange={(e) => changeValue(e)}></input>
                    <input type="button" value={"search"} className="home__form-inputButton"
                        onClick={(e) => searchCity(e)}></input>
                </div>
            </form>
        </div>
    );
}

export default Home;