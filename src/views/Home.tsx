import React, { useState } from "react";
import Typewriter from "../tools/Typewriter";
import CurrentWeather from "../services/CurrentWeather";
import { useSelector, useDispatch } from 'react-redux';

function Home() {
    const [city,setCity] = useState('');
    
    const image = useSelector((state:any) => state.image);
    const weather = useSelector((state:any) => state.weather);
    const temp = useSelector((state:any) => state.temp);
    const wind = useSelector((state:any) => state.wind);

    const changeValue = (e:any) => {
        e.preventDefault();
        setCity(city=>city=e.target.value)
    }

    return (
        <div className="home">
            <div className="home__main"></div>
            <form className="home__form">

                <div className="home__form-text">
                    <Typewriter text='Wisła' speed={200}/>
                </div>

                <div className="home__form-output">
                    <div className="home__form-outputImage"></div>
                    <div className="home__form-outputTemp">{temp}</div>
                    <div className="home__form-outputWind">{wind}</div>
                </div>

                <div className="home__form-input">
                    <input className="home__form-inputBlock" value={city} 
                    onChange={(e)=>changeValue(e)}></input>
                    <input type="button" value={"search"} className="home__form-inputButton" onClick={() => <CurrentWeather city={city}/>}></input>
                </div>
            </form>
        </div>
    );
}

export default Home;