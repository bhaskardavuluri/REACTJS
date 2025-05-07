import React,{Component} from "react";
class Counter extends Component{
  
        state={
            Counter:6
        }
         incCounter=()=>{
            this.setState(prevState=>({Counter:prevState.Counter+1}))
       

        }
        decCounter=()=>{
            this.setState(prevState=>({Counter:prevState.Counter-1}))
        }
    
    render(){
        return <div>
            <h1>INCR/DECR Counter</h1>
            <hr/>
            <pre>{this.state.Counter}</pre>
            <button onClickCapture={this.incCounter}>INCREMENT/+</button>
            <button onClick={this.decCounter}>DECREMENT/-</button>
        </div>
        }
    }
    



        
        
    

export default Counter;