import style from './Albom.module.css'
const Albom = (props) =>{
    return(
        <div className={style.alobBox}>
            <h2>{props.album.id}</h2>
            <h3>{props.album.title}</h3>
        </div>
    );
}
export default Albom;