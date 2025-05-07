import Emp from './Emp'
let User=()=>{
    let user_data={

 
     uname:"rahul",
     uid:12,
     usal:45000,
      ulocation:"banglore"
    }
    return <div>
        <h1>USER COMPONENT</h1>

        <hr/>
        <Emp Employee={user_data}/>
    </div>
}
export default User;