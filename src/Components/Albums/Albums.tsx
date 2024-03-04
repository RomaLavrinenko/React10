import { useEffect } from 'react';
import Albom from './Albom';
import { getAlbumsThunk } from '../../redux/reducers/action/componentsAction';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppStateType } from '../../redux/store';
import { IntAlbums } from '../../redux/reducers/albumsReducers';
import React from 'react';


const Albums = () =>{

    const albums = useSelector((store:AppStateType): IntAlbums[] | [] => store.albumsReducers.albums);
    const dispatch:AppDispatch = useDispatch()
    const getAlbums = () => dispatch(getAlbumsThunk());
    useEffect(() =>{
      getAlbums();
    },[])

    return(
        <div style={{display:"flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {albums?.map((album:IntAlbums) => <Albom key={album.id} album={album} userId={0} id={0} title={''}/>)}
        </div>    
    );
}

export default Albums;


