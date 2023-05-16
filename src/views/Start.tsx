import React, { useState, useEffect } from "react";

const Typewriter = (props:any) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      if (currentIndex < props.text.length) {
        const timer = setTimeout(() => {
          setCurrentText((prevText) => prevText + props.text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, props.speed);
        return () => clearTimeout(timer);
      }
    }, [currentIndex, props.text, props.speed]);
  
    return <span>{currentText}</span>;
  };

function Start() {

    return (
        <div className="start">
            <div className="start__main">
                <div className="start__mainMoon"></div>
                <form className="start__form">
                    <p className="start__form-text"><Typewriter text="Search weather for your city :" speed={200} /></p>
                    <input className="start__form-input" type="text"></input>
                </form>
            </div>
        </div>
    );
}

export default Start;