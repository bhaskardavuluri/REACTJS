import { createStore } from "redux";
import { mobilReducer } from "./mobil/mobil.reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

let store=createStore(mobilReducer,composeWithDevTools())
export {store};