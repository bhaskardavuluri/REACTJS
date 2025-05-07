import CD from "./CD";
let CC=(props)=>{
    return <div>
        <h1>COMPONENT C</h1>
        <pre>{JSON.stringify(props)}</pre>
        <hr/>
        <CD ename={props.ename}/>       
    </div>
}
export default CC;