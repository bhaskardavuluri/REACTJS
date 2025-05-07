import CC from "./CC";
let CB=(props)=>{
    return <div>
        <h1>COMPONENT B</h1>
        <pre>{JSON.stringify(props)}</pre>
        
        <hr/>
       <CC ename={props.ename} />
           </div>
}
export default CB;