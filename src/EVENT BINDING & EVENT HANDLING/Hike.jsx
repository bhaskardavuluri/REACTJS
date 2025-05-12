import { useState } from "react";

let Hike=()=>{
    let[hike,sethike]=useState(30000)
    let salaryhandler=(hikevalue)=>{
        sethike(hike+hikevalue)
    }
    return <div>
        <h1>EMPLOYEE SALARY HIKE </h1>
        <hr/>
        <h1>EMPLOYEE SALARAY:{hike}</h1>
        <button onClick={salaryhandler.bind(null,50000)}>HIKE 50K</button> <br/> <br/>
        <button onClick={salaryhandler.bind(null,30000)}>HIKE 30K</button> <br/> <br/>
        <button onClick={salaryhandler.bind(null,40000)}>HIKE 40K</button> <br/> <br/>
        <button onClick={salaryhandler.bind(null,0)}>HIKE 0</button> <br/> <br/>

    </div>
}
export default Hike;