import ComponentB from "./CompoB";
let ComponentA=()=>{
    let uid= 101;
    let uname="bhaskar"
    let location="guntur";
    let newmem={id:101,location:"banglore",esal:12000}
    return <div>
        <h1> ComponentA</h1>
        <hr/>
        <ComponentB eid={uid} ename={uname} elocation={location}/>
    </div>

}
export default ComponentA;