import React from "react";
import "./Waffle.css";
import WaffleColumn from "../WaffleColumn/WaffleColumn";
import useWindowDimensions from "../../hooks/useWindowDimensions";


export default function Waffle(props) {
    const { height, width } = useWindowDimensions();
    
    //determines number of columns waffle should have
    let columns = parseInt((width / height * 100 - 4) / 24);
    columns = (columns == 0 ? 1 : columns);
    columns = (columns > 6 ? 6 : columns);
    
    const w = columns * 24 + 4;
    
    return (
        <div className="waffle" style={{ "width": w + "vh" }}>
            <WaffleColumn visible={columns >= 0} click={props.click}/>
            <WaffleColumn visible={columns > 1} click={props.click}/>
            <WaffleColumn visible={columns > 2} click={props.click}/>
            <WaffleColumn visible={columns > 3} click={props.click}/>
            <WaffleColumn visible={columns > 4} click={props.click}/>
            <WaffleColumn visible={columns > 5} click={props.click}/>
            <div className="rightEdge" />
        </div>
    )
}