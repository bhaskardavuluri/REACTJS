import {INCR,DECR} from './product.action'
let initialstate={
    productname:"moto edge",
    price:33000,
    qty:1
}
let prodReducer=(state=initialstate,action)=>{
    switch (action.type) {    
        case INCR:
            
            return {...state,qty:state.qty+1}
         case DECR:
            return {...state,qty:state.qty-1}    
        default:
            return state;
    }

}
export {prodReducer}