import { useState } from "react";

let Messages=()=>{
    let[msg,setmsg]=useState("hello")
    let updatehandler=(msgvalue)=>{
        setmsg(msgvalue)

    }
   
    
    return <div>
    
    <h1>value:{msg}</h1>
    <button onClick={updatehandler.bind(null,"gm")}>Good mrng</button>
    <button onClick={updatehandler.bind(null,"ga")}>GUDAFTERNOON</button>
    <button onClick={updatehandler.bind(null,"ge")}>GUDEVENG</button>
    <button onClick={updatehandler.bind(null,"gn")}> GUD NIGHT </button>
    </div>
}
export default Messages;