import React from "react"
import "./button.css"

export default function Button ({onclick: getData, value}) {
    return(
    <button onClick={getData}>{value}</button>
    )}
 