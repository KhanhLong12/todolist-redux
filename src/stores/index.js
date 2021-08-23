import { combineReducers, createStore } from "redux";
import { ToDoListReducer } from "./ToDoLists/reducer";
const appReducer = combineReducers ({
    todoList : ToDoListReducer 
});

const store = createStore(appReducer);
export default store;