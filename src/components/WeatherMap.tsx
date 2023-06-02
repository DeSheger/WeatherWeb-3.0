import { useSelector } from "react-redux";

function WeatherMap() {
    const lat = useSelector((state: any) => state.forecastWeatherReducer.lat)
    const lon = useSelector((state: any) => state.forecastWeatherReducer.lon)

    const weatherMapURL = `https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=${lat}&lon=${lon}&zoom=25`

    return (
        <div className="weatherMap">
            <iframe className="weatherMap__map" title="Inline Frame Example" src={weatherMapURL}>
            </iframe>
        </div>
    )
}

export default WeatherMap;