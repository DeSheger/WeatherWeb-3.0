import { useSelector } from "react-redux";
import ForecastWeather from "../services/ForecastWeather";
import { useEffect, useState } from "react";
import IForecastWeather from "../interfaces/IForecastWeather";

const ForecastWeatherForm = () => {
    const searchedCity: string = useSelector((state: any) => state.searchCityReducer.city)
    const forecastWeather: IForecastWeather = useSelector((state: any) => state.forecastWeatherReducer)

    const [updateWeather, setupdateWeather] = useState<boolean>(true);

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
                <p>{forecastWeather.city}</p>
                
            </li>
            <li className="forecastWeatherForm__item">
                <p>{forecastWeather.forecast[0].date.substr(0, 11)}</p>
                <p>{forecastWeather.forecast[0].weather}</p>
                <p><img src={forecastWeather.forecast[0].img} alt="sorry"></img></p>
                <p>{forecastWeather.forecast[0].temp} C</p>
            </li>
            <li className="forecastWeatherForm__item">
                <p>{forecastWeather.forecast[1].date.substr(0, 11)}</p>
                <p>{forecastWeather.forecast[1].weather}</p>
                <p><img src={forecastWeather.forecast[1].img} alt="sorry"></img></p>
                <p>{forecastWeather.forecast[1].temp} C</p>
            </li>
            <li className="forecastWeatherForm__item">
                <p>{forecastWeather.forecast[2].date.substr(0, 11)}</p>
                <p>{forecastWeather.forecast[2].weather}</p>
                <p><img src={forecastWeather.forecast[2].img} alt="sorry"></img></p>
                <p>{forecastWeather.forecast[2].temp} C</p>
            </li>
            <li className="forecastWeatherForm__item">
                <p>{forecastWeather.forecast[3].date.substr(0, 11)}</p>
                <p>{forecastWeather.forecast[3].weather}</p>
                <p><img src={forecastWeather.forecast[3].img} alt="sorry"></img></p>
                <p>{forecastWeather.forecast[3].temp} C</p>
            </li>
            <li className="forecastWeatherForm__item">
                <p>{forecastWeather.forecast[4].date.substr(0, 11)}</p>
                <p>{forecastWeather.forecast[4].weather}</p>
                <p><img src={forecastWeather.forecast[4].img} alt="sorry"></img></p>
                <p>{forecastWeather.forecast[4].temp} C</p>
            </li>
        </form>
    )
}

export default ForecastWeatherForm;