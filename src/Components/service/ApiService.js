import axios from "axios"
import { componentsAllAction } from "../../redux/reducers/action/componentsAction";
const { REACT_APP_BASEURL } = process.env;

const instance = axios.create({
    baseURL: REACT_APP_BASEURL,
});


export const GetAlbom = {
    handleAlbom: async (dispatch) =>{
        try{
            let response = await instance.get('https://jsonplaceholder.typicode.com/albums');
            dispatch(componentsAllAction.setAlbums(response.data));
        }catch{}
    }
};

export const GetComment = {
    handleComment: async (dispatch) =>{
        try{
            let response = await instance.get('https://jsonplaceholder.typicode.com/comments');
            dispatch(componentsAllAction.setComments(response.data));
        }catch{}
    }
};


export const GetTodo = {
    handleTodo: async (dispatch) =>{
        try{
            let response = await instance.get('https://jsonplaceholder.typicode.com/todos');
            dispatch(componentsAllAction.setTodos(response.data));
        }catch{}
    }
};   
    
    // (dispatch) =>{
    //     axios('https://jsonplaceholder.typicode.com/todos')
    //     .then((response) => {
    //         dispatch(todosAction.setTodos(response.data))
    //     }); 
    // },


// export const GetPosts = {
//     handlePosts: (props) =>{
//         axios(`https://jsonplaceholder.typicode.com/posts/${props}`)
//         .then((response) => {
//             console.log(response.data);
//         }); 
//     },
// };




