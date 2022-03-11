import React from "react";
import "./Waffle.css";
import WaffleColumn from "../WaffleColumn/WaffleColumn";
import useWindowDimensions from "../../hooks/useWindowDimensions";


export default function Waffle() {
    const { height, width } = useWindowDimensions();
    
    //determines number of columns waffle should have
    let columns = parseInt((width / height * 100 - 4) / 24);
    columns = (columns === 0 ? 1 : columns);
    columns = (columns > 6 ? 6 : columns);
    
    const w = columns * 24 + 4;
    
    return (
        <div className="waffle" style={{ "width": w + "vh" }}>
            <WaffleColumn visible={columns >= 0} />
            <WaffleColumn visible={columns > 1} />
            <WaffleColumn visible={columns > 2} />
            <WaffleColumn visible={columns > 3} />
            <WaffleColumn visible={columns > 4} />
            <WaffleColumn visible={columns > 5} />
            <div className="rightEdge" />
        </div>
    )
}