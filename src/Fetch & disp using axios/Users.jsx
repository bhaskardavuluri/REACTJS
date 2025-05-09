import axios from "axios"
import React from "react"
import { useState } from "react"
let Users=()=>{
    let[Users,setusers]=useState([])
       let datahandler=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            console.log(res.data)
            setusers(res.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
      
    }
    return <div>
    
        <h1>FETCHING AND DIPLAYINHG USING AXIOS </h1>
        <hr/>
        <pre>{JSON.stringify(Users)}</pre>
        <button onClick={datahandler}>GET DATA</button>
        <table className="table" border={2}>
            <thead>
                <tr>
                    <th> USER ID</th>
                    <th>USER NAME</th>
                    <th>CITY</th>
                </tr>
            </thead>
            <tbody>{
                Users.length>0?
                <>
                {
                    Users.map((user)=>{
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.address.city}</td>
                    
                        </tr>
                })
                }
                    

                    </>:<h4>NO DATA</h4>
                
                    

            }
                
            </tbody>
                    </table>
    </div>
}
export default Users;