import { combineReducers } from "redux";
import GameReducer from "./GameReducer";

const RootReducer = combineReducers({
  tictac: GameReducer,
});
export default RootReducer;
