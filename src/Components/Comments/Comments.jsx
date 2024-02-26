import { useEffect } from 'react';
import Comment from './Comment';
import { getCommentsThunk } from '../../redux/reducers/action/componentsAction';
import { useDispatch, useSelector } from 'react-redux';



const Comments = () => {

    const comments = useSelector((store) => store.commentsRedecers.comments);
    const dispatch = useDispatch()
    const getComments = () => dispatch(getCommentsThunk());
    useEffect(() => {
        getComments();
    }, [])

    return (
        <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {comments?.map((comment) => <Comment key={comment.id} comment={comment} />)}
        </div>
    );
}

export default Comments;