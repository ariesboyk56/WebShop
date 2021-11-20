import { combineReducers } from "redux"
import products from "./products"
import users from "./users"
const rootReducers = combineReducers({
  products,
  users
})
export default rootReducers