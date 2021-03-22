import { combineReducers } from "redux";
import CartReducer from "./cartReducer";
import SiteReducer from "./itemsReducer";

const rootReducer = combineReducers({
  cart: CartReducer,
  site: SiteReducer,
});

export default rootReducer;
