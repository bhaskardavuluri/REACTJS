import { useState } from "react"

let Cars=()=>{
    let [color,setColor]=useState("red")
    let Carcolor=()=>{
        setColor("blue")
    }
        return (
            <div>
                <h1> BUGATTI</h1>
                <p>color: {color}</p>
                <button onClick={Carcolor}>SCORPIO</button>
            </div>
        )
    
}
export default Cars;