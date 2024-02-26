import style from './Comment.module.css'

const Comment = (props) =>{
    
    return(
        <div className={style.commentBox}>
            <h2>postId: {props.comment.postId}</h2>
            <h2>id: {props.comment.id}</h2>
            <h3>name: {props.comment.name}</h3>
            <h4>{props.comment.email}</h4>
            <h4>{props.comment.body}</h4>
        </div>
    );
}
export default Comment;