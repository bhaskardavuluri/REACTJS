import Mobil from "./components/Mobil";
import { store } from "./redux/store";
import { Provider } from "react-redux";
let App=()=>{
    
    return <div> <Provider store={store}>
        <h1>APP COMPONENT </h1>
       
        <hr/>
        <Mobil/>
        </Provider>
        
         
         
    </div>
}
export default App;
