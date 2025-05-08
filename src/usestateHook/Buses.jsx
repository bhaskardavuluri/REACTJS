import { useState } from "react";

let Buses=()=>{
    let[value,setvalue]=useState("SEMI SLEEPER")
    let Bustype=()=>{
        setvalue("AC SLEEPER");
    }
            return <div>
        <h1>BUS COMPONENT</h1>
        <hr/>
        <p>TYPE:{value}</p>
        <button onClick={Bustype}>VOLVO MULTI AXLE</button>
    </div>
}
export default Buses;