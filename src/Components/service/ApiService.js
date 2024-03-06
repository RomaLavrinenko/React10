import axios from "axios"
const { REACT_APP_BASEURL } = process.env;

const instance = axios.create({
    baseURL: REACT_APP_BASEURL,
});

export const GetAlbom = {
    handleAlbom: () =>{
        return instance.get('https://jsonplaceholder.typicode.com/albums')
    }
};   

export const GetComment = {
    handleComment: () =>{
        return instance.get('https://jsonplaceholder.typicode.com/comments')
    }
}; 
export const GetTodo = {
    handleTodo: () =>{
        return instance.get('https://jsonplaceholder.typicode.com/todos')
    }
}; 
    




