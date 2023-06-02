import { useSelector } from "react-redux";
import ForecastWeather from "../services/ForecastWeather";
import { useEffect, useState } from "react";

function ForecastWeatherForm() {
    const searchedCity = useSelector((state: any) => state.searchCityReducer.city)
    const forecastWeather = useSelector((state: any) => state.forecastWeatherReducer.forecast)
    const city = useSelector((state: any) => state.forecastWeatherReducer.city)

    const [updateWeather, setupdateWeather] = useState(true);

    useEffect(() => {
        let useCall = function(){
            setupdateWeather(false)
        };
        setTimeout(useCall,500)
      }, []);

    return (
        <form className="forecastWeatherForm">
            {updateWeather?<ForecastWeather city={searchedCity} />:null}
            <li className="forecastWeatherForm__item">
                <p>{city}</p>
                
            </li>
            <li className="forecastWeatherForm__item">
                <p>{forecastWeather[0].date}</p>
                <p>{forecastWeather[0].weather}</p>
                <p><img src={forecastWeather[0].img} alt="sorry"></img></p>
                <p>{forecastWeather[0].temp}</p>
            </li>
            <li className="forecastWeatherForm__item">
                <p>{forecastWeather[1].date}</p>
                <p>{forecastWeather[1].weather}</p>
                <p><img src={forecastWeather[1].img} alt="sorry"></img></p>
                <p>{forecastWeather[1].temp}</p>
            </li>
            <li className="forecastWeatherForm__item">
                <p>{forecastWeather[2].date}</p>
                <p>{forecastWeather[2].weather}</p>
                <p><img src={forecastWeather[2].img} alt="sorry"></img></p>
                <p>{forecastWeather[2].temp}</p>
            </li>
            <li className="forecastWeatherForm__item">
                <p>{forecastWeather[3].date}</p>
                <p>{forecastWeather[3].weather}</p>
                <p><img src={forecastWeather[3].img} alt="sorry"></img></p>
                <p>{forecastWeather[3].temp}</p>
            </li>
            <li className="forecastWeatherForm__item">
                <p>{forecastWeather[4].date}</p>
                <p>{forecastWeather[4].weather}</p>
                <p><img src={forecastWeather[4].img} alt="sorry"></img></p>
                <p>{forecastWeather[4].temp}</p>
            </li>
        </form>
    )
}

export default ForecastWeatherForm;