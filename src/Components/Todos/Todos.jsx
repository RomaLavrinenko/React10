import { useEffect } from 'react';
import Todo from './Todo';
import { getTodosThunk } from '../../redux/reducers/action/componentsAction';
import { useDispatch, useSelector } from 'react-redux';

const Todos = () =>{
    const todos = useSelector((store) => store.todosReducers.todos);
    const dispatch = useDispatch()
    const getTodos = () => dispatch(getTodosThunk());
    useEffect(() =>{
      getTodos();
    },[])

    return(
        <div style={{display:"flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {todos?.map((todo) => <Todo key={todo.id} todo={todo}/>)}
        </div>
        
    );
}

export default Todos;