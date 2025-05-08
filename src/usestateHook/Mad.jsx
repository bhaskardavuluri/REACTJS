import { useState } from "react";
let Mad=()=>{
    let [msg,setMsg]=useState("how r u")
    let gmhandler=()=>{
        setMsg("gm")
    }
    let gehandler=()=>{
        setMsg("gevent")
    }
    
    return( <div>
        <h1>MESSAGE COMPONENT</h1>
        <h1>message value:{msg}</h1>
        <button onClick={gmhandler}> GOOD MORNING </button>   
        <button onClick={gehandler}>good evening </button>
         </div>)
}

export default Mad;
