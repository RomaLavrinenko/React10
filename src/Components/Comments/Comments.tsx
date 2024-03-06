import { useEffect } from 'react';
import Comment from './Comment';
import { useDispatch, useSelector } from 'react-redux';
import { IntComments, getCommentsThankRTK } from '../reduxTK/slice/CommentsSlice';
import { AppDispatch, RootState } from '../reduxTK/store';



const Comments = () => {

    const dispatch:AppDispatch = useDispatch()
    const comments = useSelector((store:RootState): IntComments[] | []  => store?.comments?.comments);
    useEffect(() =>{
      dispatch(getCommentsThankRTK())
    },[])

    return (
        <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {comments?.map((comment: IntComments) => <Comment key={comment.id} comment={comment} postId={0} id={0} name={''} email={''} body={''}  />)}
        </div>
    );
}

export default Comments;