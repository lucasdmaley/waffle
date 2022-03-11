import React, { useState } from "react";
import "./WaffleSquare.css"

export default function WaffleSquare() {
    
    // Note that fillLevel can take decimal values (i.e., is of type float)
    let [ fillLevel, setFillLevel] = useState(16);
    
    if (fillLevel >= 19) {
        fillLevel = 19;
    } 
    
    const fillLevelInt = parseInt(fillLevel + 1);
    
    return (
        <div className="square" 
             onClick={() => setFillLevel(fillLevel + (fillLevel >= 17 ? 1 : 0.4))}>
            <div className="topShadow"/>
            <div className="leftShadow" />
            <div className="syrup" style={{"height": fillLevelInt + "vh", 
                                           "width": fillLevelInt + "vh",
                                           "left": 20 - fillLevelInt + "vh",
                                           "top": 20 - fillLevelInt + "vh",
                                           "opacity": (fillLevel - 16)}}/>
        </div>
    );
}