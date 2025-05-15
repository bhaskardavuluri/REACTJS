import Products from "./components/Products";
import { Provider } from "react-redux";
import { store } from "./redux/store";
let App=()=>{
    
    return <div> <Provider store={store}>
        <h1>APP COMPONENT </h1>
       
        <hr/>
         <Products/>
         </Provider>
         
    </div>
}
export default App;
