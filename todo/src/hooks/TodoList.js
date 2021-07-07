import React, {useReducer} from 'react';
import {ToDoForm} from "./TodoForm";
import {reducer, todo } from "../reducers/Reducer"


export const ToDoList = props => {
    const [state, dispatch] = useReducer(reducer, todo);
    return (
        <div>
            <ToDoForm dispatch={dispatch} />
            {state.map(todo => {
                return <ToDo key={todo.id} todo={todo} dispatch={dispatch} />;
            })}
        </div>
    )
}
