import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"
import countReducer from "../features/count/countSlice";
import userReducer from "../features/users/userSlice"

const store = configureStore({
    reducer : {
        todo : todoReducer,
        count : countReducer,
        usersXD : userReducer
    }
})

export default store