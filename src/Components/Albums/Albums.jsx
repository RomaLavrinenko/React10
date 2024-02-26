import { useEffect } from 'react';
import Albom from './Albom';
import { getAlbumsThunk } from '../../redux/reducers/action/componentsAction';
import { useDispatch, useSelector } from 'react-redux';


const Albums = () =>{

    const albums = useSelector((store) => store.albumsReducers.albums);
    const dispatch = useDispatch()
    const getAlbums = () => dispatch(getAlbumsThunk());
    useEffect(() =>{
      getAlbums();
    },[])

    return(
        <div style={{display:"flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {albums?.map((album) => <Albom key={album.id} album={album}/>)}
        </div>    
    );
}

export default Albums;
