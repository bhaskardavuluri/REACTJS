import axios from "axios"
import { useEffect, useState } from "react"
import React from "react"
let Posts=()=>{
    let[Posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res.data);
            setPosts(res.data)
        }
    )
    .catch((err)=>{
        console.log(err.message);
    }
)},[])
    
    return <div>
        <h1>FETCHING AND DISPLAYING DATA USING AXIOS </h1>
        <hr/>
        
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
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))
           ): (
            <tr>
              <td>LOADING...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  
};

export default Posts;