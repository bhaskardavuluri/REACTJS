import axios from "axios"
import { useState } from "react"
import React from "react"
let Posts=()=>{
    let[Posts,setPosts]=useState([])
    let datahandler=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res.data);
            setPosts(res.data)
        }
    )
    .catch((err)=>{
        console.log(err.messages);
    }
)
    }
    return <div>
        <h1>FETCHING AND DISPLAYING DATA USING AXIOS </h1>
        <hr/>
        <button onClick={datahandler}>GET DATA</button>
        <pre>{JSON.stringify(Posts)}</pre>
        <table className="table" border={1}>
        <thead>
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>BODY</th>
            </tr>
            </thead>
            <tbody>
          {Posts.length > 0 ? (
            Posts.map((post) => (
              <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))
           ): (
            <tr>
              <td colSpan="3">NO DATA</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  
};

export default Posts;