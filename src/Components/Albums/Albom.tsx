import React from 'react';
import { IntAlbums } from '../../redux/reducers/albumsReducers';
const Albom = (props:IntAlbums) =>{
    return(
        <div style={{border:"1px solid black", borderRadius:"5px", textAlign:"center",width:"33%",height:"100px",marginBottom:'10px'}}>
            <h2>{props.album.id}</h2>
            <h3>{props.album.title}</h3>
        </div>
    );
}
export default Albom;