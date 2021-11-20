import { createStore } from "redux";
import rootReducers from "./reducers";

const store = createStore(
  rootReducers
)
export default store

// Tạo RootState để sử dụng được useSelector hook
  // Cách sử dụng useSelector ở components children

//   import { RootState } from 'app/redux/store';
// const isLoggedIn = useSelector((state: RootState) => state.user.loggedIn);

//hoặc cách 2: const name = useSelector<RootState, string>((state) => state.name);
export type RootState = ReturnType<typeof store.getState>;