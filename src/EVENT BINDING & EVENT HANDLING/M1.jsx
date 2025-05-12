import { useState } from "react";

let Msg=()=>{
    let[value,setvalue]=useState("HEYA")
    let gmhandler=()=>{
        setvalue("GOOD MOPRNING")
    }
    let gahandler=()=>{
        setvalue("GOOD AFTERNOON")
    }
    let gehandler=()=>{
        setvalue("GOOD EVENING")
    }
    let gnhandler=()=>{
        setvalue("GOOD NIGHT")

    }
    return <div>
        <h1>MESSAGE COMPONENT</h1>
        <hr/>
        <h1> MESSAGE:{value}</h1>
        <button onClick={gmhandler}>GM</button> <br/> <br/>
        <button onClick={gahandler}>GA</button>  <br/> <br/>
        <button onClick={gehandler}>GE</button> <br/> <br/>
        <button onClick={gnhandler}>GN</button> <br/> <br/>
    </div>
}
export default Msg;