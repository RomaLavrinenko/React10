import style from './Todo.module.css'
const Todo = (props) =>{
    return(
        <div className={style.todoBox}>
            <h2>userId: {props.todo.userId}</h2>
            <h2>{props.todo.id}</h2>
            <h3>{props.todo.title}</h3>
        </div>
    );
}
export default Todo;