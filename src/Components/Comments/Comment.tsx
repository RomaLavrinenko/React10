import React from 'react';
import { IntComments } from '../../redux/reducers/commentsRedecers';
const Comment = (props:IntComments) =>{
    
    return(
        <div style={{border:"1px solid black", borderRadius:"5px", textAlign:"center",width:"33%",height:"200px",marginBottom:'10px'}}>
            <h2>postId: {props.comment.postId}</h2>
            <h2>id: {props.comment.id}</h2>
            <h3>name: {props.comment.name}</h3>
            <h4>{props.comment.email}</h4>
            <h4>{props.comment.body}</h4>
        </div>
    );
}
export default Comment;