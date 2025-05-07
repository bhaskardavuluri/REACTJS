import { useState } from "react";

let Train=()=>{
    let[color,setColor]=useState("express")
    
    let Traincolor=()=>{
        setColor("superfast")

    }
    return <div>
        <h1>TRAIN COMPONENT</h1>    
        <hr/>
        <p>type:{color}</p>
        <button onClick={Traincolor}>NARAYANADRI SF EXPRESS</button>
        </div>
}
export default Train;