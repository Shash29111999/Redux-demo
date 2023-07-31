import {createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    tasks : [] ,
}

const todoSlice = createSlice({
    name : "todo",
    initialState : initialState,
    reducers : {
        addTodo : (state ,action) => {
            state.tasks.push({ id: nanoid(), text: action.payload })
        },
        deleteTodo : (state , action ) => {
           state.tasks = state.tasks.filter( (task) => task.id !== action.payload)
        }
    }

})

export const {addTodo , deleteTodo } = todoSlice.actions

export default todoSlice.reducer