import { useEffect } from 'react';
import Comment from './Comment';
import { getCommentsThunk } from '../../redux/reducers/action/componentsAction';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppStateType } from '../../redux/store';
import { IntComments } from '../../redux/reducers/commentsRedecers';
import React from 'react';



const Comments = () => {

    const comments = useSelector((store:AppStateType): IntComments[] | []=> store.commentsRedecers.comments);
    const dispatch:AppDispatch = useDispatch()
    const getComments = () => dispatch(getCommentsThunk());
    useEffect(() => {
        getComments();
    }, [])

    return (
        <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {comments?.map((comment: IntComments) => <Comment key={comment.id} comment={comment} postId={0} id={0} name={''} email={''} body={''}  />)}
        </div>
    );
}

export default Comments;