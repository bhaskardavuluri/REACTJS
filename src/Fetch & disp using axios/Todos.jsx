import axios from "axios";
import { useState } from "react";
import React from "react";
import Posts from "./Posts";
let Todos=()=>{
    let[Todos,setTodos]=useState([])
    let datahandler=()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>{
            console.log(res.data);
            setTodos(res.data)
        }
    )

        .catch((err)=>{
            console.log(err.message);
        }
            
        )
        
            
        

    }
    return <div>
        <h1>FETCH & DISPLAYING DATA USING AXIOS </h1>
        <hr/>
        <pre>{JSON.stringify(Todos)}</pre>
        <button onClick={datahandler}>FETCH DATA</button>
        <table className="table" border={1}>
        <thead>
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>COMPLETED</th>
            </tr>
        </thead>
        <tbody>
        {
            Todos.length>0?(
                Todos.map((Todo)=>(
                    <tr>
                        <td>{Todo.id}</td>
                        <td>{Todo.title}</td>
                        <td>{Todo.completed.toString()}</td>


                    </tr>
                )
                    
                )
            ):(
                <tr> NO DATA</tr>
            )
        }

        </tbody>

        </table>
       
    </div>
}
    

export default Todos;