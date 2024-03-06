import { useEffect } from 'react';
import Albom from './Albom';
import { useDispatch, useSelector } from 'react-redux';
import { IntAlbums, getAlbomThankRTK } from '../reduxTK/slice/AlbumsSlice';
import { AppDispatch, RootState } from '../reduxTK/store';

const Albums = () =>{

  const dispatch:AppDispatch = useDispatch()
  const albums = useSelector((store:RootState): IntAlbums[] | []  => store?.albums?.albums);
  useEffect(() =>{
    dispatch(getAlbomThankRTK())
  },[])

    return(
        <div style={{display:"flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {albums?.map((album:IntAlbums) => <Albom key={album.id} album={album} userId={0} id={0} title={''}/>)}
        </div>    
    );
}

export default Albums;


