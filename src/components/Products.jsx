import { useDispatch,useSelector} from "react-redux";
import {incrAction,decrAction} from '../redux/product/product.action'
let Products=()=>{
    let dispatch=useDispatch();
    let product=useSelector(state=>state);
    let incrhandler=()=>{
        dispatch(incrAction())

    }
    let decrhandler=()=>{

        dispatch(decrAction())
    }
    return <div>
    <pre>{JSON.stringify(product)}</pre>
    <h1>product quantity:{product.qty}</h1>
        <h1>PRODUCT COMPONENT</h1>
        <h2>Product name:{product.productname}</h2>
         <h2>Product price:{product.price}</h2>
         <h2>Total price:{product.price*product.qty}</h2>
         <button onClick={incrhandler}>+</button>
         {product.qty}
         <button onClick={decrhandler}>-</button>
    </div>
}
export default Products;