import { useState } from "react";
import Typewriter from "../tools/Typewriter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Start() {
    const [typedCity, setTypedCity] = useState(String);

    const dispatch = useDispatch();

    const onChangeHandler = (e: any) => {
        setTypedCity(e.target.value)
    }

    const onClickHandler = () => {
        dispatch({
            type: 'CHANGE_CITY',
            payload: {
                city: typedCity
            }
        })
    }

    return (
        <div className="start">
            <div className="start__sidebar">
                <h1 className="start__sidebar-logo">
                    <Typewriter text="WeatherWeb-3.0" speed={200} />
                </h1>

                <ul className="start__sidebar-menu">
                    <li className="start__sidebar-item"><Link to="/home" onClick={() => onClickHandler()}>Home</Link></li>
                    <li className="start__sidebar-item"><Link to="/weekly" onClick={() => onClickHandler()}>Weekly</Link></li>
                    <li className="start__sidebar-item"><Link to="/home" onClick={() => onClickHandler()}>Map</Link></li>
                </ul>
            </div>

            <div className="start__main">

                <div className="start__mainMoon"></div>
                
                <form className="start__form">
                    <p className="start__form-text"><Typewriter text="Search weather for your city :" speed={200} /></p>
                    <input className="start__form-input" type="text" value={typedCity} onChange={
                        (e) => onChangeHandler(e)
                    } />
                    <li className="start__form-button"><Link to="/home" onClick={() => onClickHandler()}>Search</Link></li>
                </form>

            </div>
        </div>
    );
}

export default Start;