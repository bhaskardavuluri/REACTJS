let ComponentB=(props)=>{
    return <div>
        <h1>{JSON.stringify(props)}</h1>
        <h1>ComponentB</h1>
        <h1> eid:{props.eid}  </h1>
        <h1>elocation:{props.elocation}</h1>
        <h1>ename:{props.ename}</h1>
    </div>
}
export default ComponentB;