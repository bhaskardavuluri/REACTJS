import { useState } from "react";

//this is an example for instead of writing separate handlers we are writimg a single handler by binding them in a single event.
let Message=()=>{
    let [value,setvalue]=useState("WISH")
    let messagehandler=(msg)=>{
    setvalue(msg)
    }
    return <div>
        <h1>EVENT BINDING  COMPONENT</h1>
        <hr/>
        <h1>MSGVALUE:{value}</h1>
        <button onClick={()=>messagehandler("GOOD MORNING")}>GM</button> <br/> <br/>
        <button onClick={()=>messagehandler("GOOD AFTERNOON")}>GA</button> <br/> <br/>
        <button onClick={()=>messagehandler("GOOD EVENING")}>GE</button> <br/> <br/>
        <button onClick={()=>messagehandler("GOOD NIGHT")}>GN</button> <br/> <br/>
    </div>
}
export default Message;