import React from "react";
class Emp extends React.Component{
    render(){
        return <div>
            <h1>EMPLOYEE COMPONENT</h1>
            <h1>{JSON.stringify(this.props)}</h1>
            <h1>EMPLOYEE NAME:{this.props.Employee.uname}</h1>
            <h1>EMPLOYEE ID:{this.props.Employee.uid} </h1>
            <h1>EMPLOYEE SALARY:{this.props.Employee.usal}</h1>
            <h1>EMPLOYEE LOCATION:{this.props.Employee.ulocation}</h1>
        </div>
    }
}
export default Emp;