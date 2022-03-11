import React from "react";

import WaffleSquare from "../WaffleSquare/WaffleSquare";

import "./WaffleColumn.css";

export default function WaffleRow(props) {
    
    if (!props.visible) {
        return <div className="nothing"/>
    }
    
    return (
        <div>
            <WaffleSquare click={props.onClick} />
            <WaffleSquare click={props.onClick} />
            <WaffleSquare click={props.onClick} />
            <WaffleSquare click={props.onClick} />
        </div>
    )
}