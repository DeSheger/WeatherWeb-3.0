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

  export default Typewriter;