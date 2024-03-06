import { useEffect } from 'react';
import Todo from './Todo';
import { useDispatch, useSelector } from 'react-redux';
import { IntTodos, getTodosThankRTK } from '../reduxTK/slice/TodosSlice';
import { AppDispatch, RootState } from '../reduxTK/store';




const Todos = () =>{
    const dispatch:AppDispatch = useDispatch()
    const todos = useSelector((store:RootState): IntTodos[] | []  => store?.todos?.todos);
    useEffect(() =>{
      dispatch(getTodosThankRTK())
    },[])

    return(
        <div style={{display:"flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {todos?.map((todo:IntTodos) => <Todo key={todo.id} todo={todo} comment={undefined} userId={0} id={0} title={''} completed={false}/>)}
        </div>
        
    );
}

export default Todos;