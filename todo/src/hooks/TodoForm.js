import React, {useState} from "react";


export const ToDoForm = ({ dispatch }) => {
   const [item, setItem] = useState("");
   console.log('ooga', item) 
    
   const handleChanges = e => {
        setItem(e.target.value)
    };
    const submitForm = e => {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: item
        });
        setItem("");
    };
    const clearCompleted = e => {
        e.preventDefault();
        dispatch({
            type: "CLEAR_COMPLETED"
        });
    };
   
    return(
    <div>
        <form onSubmit={submitForm}>
            <label htmlFor="todo" hidden>To-Do</label>
            <input name="todo" onChange={handleChanges} value={item} />
            <button>Add to Do</button>
            <button onClick={clearCompleted}>Completed</button>
        </form>
    </div>
    
    
        );
    }
    console.log('TOdOFORM', ToDoForm)