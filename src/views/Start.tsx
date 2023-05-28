import { useState } from "react";
import Typewriter from "../tools/Typewriter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Menu from "../components/Menu";

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
            <Menu />

            <div className="start__main">

                <div className="start__mainMoon"></div>
                
                <form className="start__form">
                    <h2 className="start__form-text"><Typewriter text="Search weather for your city :" speed={200} /></h2>
                    <input className="start__form-input" type="text" value={typedCity} onChange={
                        (e) => onChangeHandler(e)
                    } />
                    <li className="start__form-button"><Link to="/current" onClick={() => onClickHandler()}>Search</Link></li>
                </form>

            </div>
        </div>
    );
}

export default Start;