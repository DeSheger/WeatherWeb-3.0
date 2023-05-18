import Typewriter from "../tools/Typewriter";

function Start() {

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
                    <input className="start__form-input" type="text"></input>
                </form>

            </div>
        </div>
    );
}

export default Start;