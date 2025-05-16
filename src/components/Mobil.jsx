import { useDispatch,useSelector } from "react-redux";
import { incrAction,decrAction } from "../redux/mobil/mobil.action";

let Mobil=()=>{
    let dispatch=useDispatch()
    let mobil=useSelector(state=>state);
    let incrhandler=()=>{
        dispatch(incrAction());
    }
    let decrhandler=()=>{
        dispatch(decrAction());
    }
    return <div>
        <h1>MOBILE COMPONENT</h1>
        <h1>Product name:{mobil.productname}</h1>
        <h1>Product price:{mobil.price}</h1>
        <h1>Total price:{mobil.price*mobil.qty}</h1>
        <h1>product quantity:{mobil.qty}</h1>
        <button onClick={incrhandler}>+</button>
        {mobil.qty}
        <button onClick={decrhandler}>-</button>
        
    </div>
}
export default Mobil;
