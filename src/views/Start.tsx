import { useState } from "react";
import Typewriter from "../tools/Typewriter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Start() {
    const [typingCity, setTypingCity] = useState(String);

    const dispatch = useDispatch();

    const onChangeHandler = (e: any) => {
        setTypingCity(e.target.value)
    }

    const onClickHandler = () => {
        dispatch({
            type: 'CHANGE_CITY',
            payload: {
                city: typingCity
            }
        })
    }

    return (
        <div className="start">
            <div className="start__main">

                <div className="start__mainQuote">
                    <p className="start__form-text"><Typewriter text="To boldly go where no man has gone before ..." speed={200} /></p>
                </div>
                <div className="start__mainBackground"></div>
                <div className="start__mainMoon"></div>
                <div className="start__mainComete1"></div>
                <div className="start__mainComete2"></div>
                <div className="start__mainSpacewalk"></div>
                <div className="start__mainMap"></div>

                <form className="start__form">
                    <p className="start__form-text"><Typewriter text="Search weather for your city :" speed={200} /></p>
                    <input className="start__form-input" type="text" value={typingCity} onChange={
                        (e) => onChangeHandler(e)
                    } />
                    <li><Link to="/home" onClick={() => onClickHandler()}>Search</Link></li>
                </form>

            </div>
        </div>
    );
}

export default Start;