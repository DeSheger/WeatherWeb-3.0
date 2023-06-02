import { useSelector } from "react-redux";
import ForecastWeather from "../services/ForecastWeather";

function ForecastWeatherForm() {
    const searchedCity = useSelector((state: any) => state.searchCityReducer.city)
    const forecastWeather = useSelector((state: any) => state.forecastWeatherReducer.forecast)
    console.log(forecastWeather)
    return (
        <form className="forecastWeatherForm">
            <ForecastWeather city={searchedCity} />

            <li className="forecastWeatherForm__item">
                {forecastWeather[0].date}
                {forecastWeather[0].weather}
                {forecastWeather[0].img}
                {forecastWeather[0].temp}
            </li>
            <li className="forecastWeatherForm__item">
                {forecastWeather[1].date}
                {forecastWeather[1].weather}
                {forecastWeather[1].img}
                {forecastWeather[1].temp}
            </li>
            <li className="forecastWeatherForm__item">
                {forecastWeather[2].date}
                {forecastWeather[2].weather}
                {forecastWeather[2].img}
                {forecastWeather[2].temp}
            </li>
            <li className="forecastWeatherForm__item">
                {forecastWeather[3].date}
                {forecastWeather[3].weather}
                {forecastWeather[3].img}
                {forecastWeather[3].temp}
            </li>
            <li className="forecastWeatherForm__item">
                {forecastWeather[4].date}
                {forecastWeather[4].weather}
                {forecastWeather[4].img}
                {forecastWeather[4].temp}
            </li>
        </form>
    )
}

export default ForecastWeatherForm;