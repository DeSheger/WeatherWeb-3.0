interface IForecastWeather {
    lat: number;
    lon: number;
    city: string;
    forecast: {
        date: string;
        weather: string;
        temp: string;
        img: string;
    }[];
}

export default IForecastWeather;