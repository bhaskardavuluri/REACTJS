import { useState } from "react";

let Bikes=()=>{
    let [Color,setColor]=useState("green")
    let Bikecolor=()=>{
        setColor("blue")

    }   
     return <div>
        <h1>BIKE COMPONENT</h1>
        <hr/>
        <p>color:{Color}</p>
        <button onClick={Bikecolor}>KAWASAKHI NINJA</button>
    </div>
}
export default Bikes;