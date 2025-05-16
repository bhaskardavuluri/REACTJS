import { INCR,DECR } from "./mobil.action"
let initialstate={
    productname:"Iphone13",
    price:44999,
    qty:1
}
let mobilReducer=(state=initialstate,action)=>{
switch (action.type) {
    case INCR:
        
        return {...state,qty:state.qty+1}
        case DECR:
            return {...state,qty:state.qty-1}

    default:
        return state;
}
}
export {mobilReducer};