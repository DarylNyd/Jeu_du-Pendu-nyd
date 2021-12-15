import React from "react"
import "./button.css"

export default function Button ({onclick: handleClick, value}) {
    return(
    <button onClick={handleClick}>{value}</button>
    )}
 