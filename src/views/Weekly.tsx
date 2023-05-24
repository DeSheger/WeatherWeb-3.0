import React from "react";
import Menu from "../components/Menu";

function Weekly() {

    return (
        <div className="weekly">
            <Menu up={true}/>
            <div id="openweathermap-widget-21"></div>
            <script>window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 21,cityid: '3081874',appid: '34cf18d958a5bebc2a3aaa0cf4eccbf6',units: 'metric',containerid: 'openweathermap-widget-21',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();</script>
        </div>
    );
}

export default Weekly;