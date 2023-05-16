import React, { useState } from "react";

function TextAnimation(props: any) {
    const [text, setText] = useState(props.text);
    const [finalText, setFinalText] = useState('');

    return(
        <p>{finalText.length<text.length ? setFinalText(() => 
            finalText+text[finalText.length]):finalText}</p>
    )


}

function Start() {

    return (
        <div className="start">
            <div className="start__main">
                <div className="start__mainMoon"></div>
                <form className="start__form">
                    <p className="start__form-text"><TextAnimation text="serch ypur city"/></p>
                    <input className="start__form-input" type="text"></input>
                </form>
            </div>
        </div>
    );
}

export default Start;