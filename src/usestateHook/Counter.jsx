import { useState } from "react";

let Counter=()=>{
    let [counter,setcounter]=useState(2)
    let inccounter=()=>{
        setcounter(counter+1);
    }

    let deccounter=()=>{
        setcounter(counter-1)
    }

    
      return <div>
        <button onClick={inccounter}>+/INCR</button>
        <p>{counter}</p>
        <button onClick={deccounter}>-/DECR</button>
    </div>
}
export default Counter;