import React, { useState } from "react";
import "./WaffleSquare.css"

function fillErUp() {
    console.log("filling er up");
}

export default function WaffleSquare() {
    
    const [ fillLevel, setFillLevel] = useState(16);
    
    if (fillLevel >= 20) {
        fillLevel = 20;
    } 
    
    return (
        <div className="square" 
             onClick={() => setFillLevel(fillLevel + (fillLevel >= 17 ? 1 : 0.4))}>
            <div className="topShadow"/>
            <div className="leftShadow" />
            <div className="syrup" style={{"height": parseInt(fillLevel + 1) + "vh", 
                                           "width": parseInt(fillLevel + 1) + "vh",
                                           "left": 20 - parseInt(fillLevel + 1) + "vh",
                                           "top": 20 - parseInt(fillLevel + 1) + "vh",
                                           "opacity": (fillLevel - 16)}}/>
        </div>
    );
}