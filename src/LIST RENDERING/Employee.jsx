let     Employee=()=>{
    let Employees=[
        {eid:101,ename:"sai",esalary:12000},
        {eid:102,ename:"uday",esalary:34000},
        {eid:103,ename:"sreejith",esalary:10000}
    ]
    return <div>
        <h1>LIST RENDERING</h1>
        <hr/>
        <table className="table">
            <thead>
            <tr>
                <th>EID</th>
                <th>ENAME</th>
                <th>ESALARY</th>
                </tr>
            </thead>
            <tbody>
                {
                    Employees.map((emp)=>{
                        return <tr key={emp.eid}>
                            <td>{emp.eid}</td>
                            <td>{emp.ename}</td>
                            <td>{emp.esalary}</td>
                        </tr>
                    
                    
                    })
                }

                    
            </tbody>
                
        </table>
    </div>
}
export default Employee;