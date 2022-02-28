import { createStore, combineReducers } from "redux";



const Html = (state = 0, action) => {
  switch (action.type) {
    case "HTML0":
      return 0;
    case "HTML1":
      return 1;
    case "HTML2":
      return 2;
    case "HTML3":
      return 3;
    default: {
      return state;
    }
  }
};





const setNumberManu = (state = 0, action) => {
  switch (action.type) {
    case "SET_NUMBER_MANU":
      return action.payload;
    default:
      return state;
  }
};



const rootReducers = combineReducers({
  setNumberManu
});
export const store = createStore(rootReducers);
