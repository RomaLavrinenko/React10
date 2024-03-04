import { useEffect } from 'react';
import Todo from './Todo';
import { getTodosThunk } from '../../redux/reducers/action/componentsAction';
import { useDispatch, useSelector } from 'react-redux';
import { IntTodos } from '../../redux/reducers/todosReducers';
import { AppDispatch, AppStateType } from '../../redux/store';
import React from 'react';




const Todos = () =>{
    const todos= useSelector((store:AppStateType): IntTodos[] | []  => store.todosReducers.todos);
    const dispatch:AppDispatch = useDispatch()
    const getTodos = () => dispatch(getTodosThunk());
    useEffect(() =>{
      getTodos();
    },[])

    return(
        <div style={{display:"flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {todos?.map((todo:IntTodos) => <Todo key={todo.id} todo={todo} comment={undefined} userId={0} id={0} title={''} completed={false}/>)}
        </div>
        
    );
}

export default Todos;