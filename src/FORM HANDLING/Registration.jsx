import { useState } from "react";
let Reg=()=>{
    let[user,setUser]=useState({uname:"", mobileno:"", mail:""})
    let updatehandler=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})

    }
    let submithandler=(event)=>{
        event.preventDefault();
        console.log(user);
    }
   
    
    return <div>
       
        <pre>{JSON.stringify(user)}</pre>
    
        <form onSubmit={submithandler}>
            Username:<input type="text" name="uname" onChange={updatehandler}/> <br/><br/>
            Mobileno:<input type="number"  name="mobileno" onChange={updatehandler}/><br/><br/>
            Email:<input type="email" name="mail" onChange={updatehandler} /><br/><br/>
            <input type="submit" value={"registration" }/>

            
        </form>
    </div>

}
export default Reg;      