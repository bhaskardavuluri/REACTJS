import { useState } from "react";

let Message=()=>{
    let[msg,setmsg]=useState("hello")
    let newmsg=()=>{
        setmsg("GM")
    }
    let newmsg1=()=>{
        setmsg("GA")
    }
    let newmsg2=()=>{
        setmsg("GE")
    }
    let newmsg3=()=>{
        setmsg("GN")
    }
    return <div>
    
    <h1>value:{msg}</h1>
    <button onClick={newmsg}>Good mrng</button>
    <button onClick={newmsg1}>GUDAFTERNOON</button>
    <button onClick={newmsg2}>GUDEVENG</button>
    <button onClick={newmsg3}> GUD NIGHT </button>
    </div>
}
export default Message;