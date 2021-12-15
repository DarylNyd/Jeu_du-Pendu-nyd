import React from "react"
import "./button.css"

export default function Button ({handleClick, value}) {
    return(
    <button onClick={handleClick}>{value}</button>
    )}
 