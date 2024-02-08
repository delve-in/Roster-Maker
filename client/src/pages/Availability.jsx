import React from "react";
import ReactDOM from "react-dom";
import TripleToggleSwitch from "../components/Switch/index";

function Availability() {
    const labels = {
        left: {
          title: "Morning",
          value: "left"
        },
        right: {
          title: "Afternoon",
          value: "right"
        },
        center: {
          title: "Not Available",
          value: "center"
        }
      };

      const onChange = (value) => console.log("value", value);

    return (
        <div>   
            <div id="day1"><TripleToggleSwitch labels={labels} onChange={onChange} /></div>
            

            </div>
        
    );
}

export default Availability;