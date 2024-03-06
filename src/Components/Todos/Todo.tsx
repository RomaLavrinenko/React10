import React from 'react';
import { IntTodos } from '../reduxTK/slice/TodosSlice';
const Todo = (props:IntTodos) =>{
    return(
        <div style={{border:"1px solid black", borderRadius:"5px", textAlign:"center",width:"33%",height:"100px",marginBottom:'10px'}}>
            <h2>userId: {props.todo.userId}</h2>
            <h2>{props.todo.id}</h2>
            <h3>{props.todo.title}</h3>
        </div>
    );
}
export default Todo;