import { useEffect, useState } from "react";
import Typewriter from "../tools/Typewriter";
import CurrentWeather from "../services/CurrentWeather";
import { useDispatch, useSelector } from 'react-redux';
import Menu from "../components/Menu";


function Home() {
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


    return (
        <div className="home">
            <Menu down={true}/>
            <div className="home__main"></div>
            <form className="home__form">

                <div className="home__form-text">
                    {searchedCity}
                </div>

                <div className="home__form-output">
                    {updateWeather ? <CurrentWeather city={searchedCity}></CurrentWeather> : null}
                    <div className="home__form-outputImage"><img alt="sorry :(" src={image}></img></div>
                    <div className="home__form-outputWeather">{weather}</div>
                    <div className="home__form-outputTemp">{temp}</div>
                    <div className="home__form-outputWind">{wind}</div>
                </div>

                <div className="home__form-input">
                    <input className="home__form-inputBlock" value={typedCity}
                        onChange={(e) => changeValue(e)}></input>
                    <input type="button" value={"search"} className="home__form-inputButton"
                        onClick={() => searchCity()}></input>
                </div>
            </form>
        </div>
    );
}

export default Home;