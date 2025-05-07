import React from "react";
class Movie extends React.Component{
    moviename="kgf3"; 
    movie_rdate=2027;
    render(){
        return <>
            <h3>MOVIECOMPONENT</h3>
            <h1>MOVIENAME:{this.moviename}</h1>
            <h1>expected release date:{this.movie_rdate}</h1>
        </>

    }

    }
    export default Movie;
 
