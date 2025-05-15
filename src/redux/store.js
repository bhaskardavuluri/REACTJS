import { createStore } from "redux";
import { prodReducer } from "./product/product.reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
let store=createStore(prodReducer,composeWithDevTools());
export {store};